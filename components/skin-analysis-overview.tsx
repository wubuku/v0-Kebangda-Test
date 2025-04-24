"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

export interface SkinDimensionScore {
  name: string
  score: number
  maxScore?: number
}

export interface SkinAnalysisOverviewProps {
  dimensions: SkinDimensionScore[]
  summary: string
  recommendations: string[]
  className?: string
}

export default function SkinAnalysisOverview({
  dimensions,
  summary,
  recommendations,
  className = "",
}: SkinAnalysisOverviewProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // 清除之前的图表实例
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // 准备雷达图数据
    const labels = dimensions.map((dim) => dim.name)
    const scores = dimensions.map((dim) => dim.score)
    const maxScores = dimensions.map((dim) => dim.maxScore || 10)

    // 创建新的图表实例
    chartInstance.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "肌肤评分",
            data: scores,
            backgroundColor: "rgba(20, 68, 139, 0.2)",
            borderColor: "rgba(20, 68, 139, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(20, 68, 139, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(20, 68, 139, 1)",
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            suggestedMin: 0,
            suggestedMax: 10,
            ticks: {
              stepSize: 2,
              backdropColor: "transparent",
              color: "rgba(0, 0, 0, 0.5)",
            },
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
            pointLabels: {
              color: "rgba(0, 0, 0, 0.7)",
              font: {
                size: 12,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => `得分: ${context.raw}/10`,
            },
          },
        },
        responsive: true,
        maintainAspectRatio: true,
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [dimensions])

  return (
    <div className={`w-full bg-white p-5 ${className}`}>
      {/* 标题 */}
      <div className="flex items-center mb-6">
        <div className="w-1 h-6 bg-blue-700 rounded-full mr-2"></div>
        <h2 className="text-xl font-bold text-[#212121]">总体状况</h2>
      </div>

      {/* 雷达图 */}
      <div className="relative w-full aspect-square max-w-md mx-auto mb-8">
        <canvas ref={chartRef}></canvas>

        {/* 分数标签 - 绝对定位在雷达图上 */}
        {dimensions.map((dim, index) => {
          // 计算每个维度标签的位置
          const angle = (Math.PI * 2 * index) / dimensions.length - Math.PI / 2
          const radius = 0.85 // 标签距离中心的半径比例
          const x = 50 + 45 * Math.cos(angle) // 50%是中心点，45%是向外的偏移
          const y = 50 + 45 * Math.sin(angle)

          return (
            <div
              key={dim.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className="text-gray-500 text-sm">指数</div>
              <div className="text-blue-700 font-bold text-xl">{dim.score.toFixed(1)}</div>
            </div>
          )
        })}
      </div>

      {/* 总结 */}
      <div className="mb-6">
        <p className="text-[#45464a] leading-relaxed">{summary}</p>
      </div>

      {/* 护理建议 */}
      <div>
        <h3 className="text-lg font-bold text-[#212121] mb-3">现阶段护理要点如下：</h3>
        <ul className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gray-400 mr-1">•</span>
              <span className="text-[#45464a]">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
