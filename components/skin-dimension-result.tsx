"use client"
import Image from "next/image"

export type SkinDimension = "FIRMNESS" | "GLOW" | "TEXTURE" | "ACNE" | "PIGMENTATION" | "WRINKLE"

export interface SkinDimensionResultProps {
  dimension: SkinDimension
  score: number
  analysisPoints: string[]
  recommendation: string
  productImage?: string
  className?: string
}

const dimensionInfo: Record<SkinDimension, { name: string; color: string }> = {
  FIRMNESS: { name: "紧致度", color: "bg-blue-700" },
  GLOW: { name: "光泽度", color: "bg-blue-700" },
  TEXTURE: { name: "细腻度", color: "bg-blue-700" },
  ACNE: { name: "痘痘", color: "bg-red-600" },
  PIGMENTATION: { name: "色斑", color: "bg-amber-700" },
  WRINKLE: { name: "皱纹", color: "bg-purple-700" },
}

export default function SkinDimensionResult({
  dimension,
  score,
  analysisPoints,
  recommendation,
  productImage,
  className = "",
}: SkinDimensionResultProps) {
  const { name, color } = dimensionInfo[dimension]

  // 根据分数确定状态
  const getStatus = (score: number): { text: string; position: string } => {
    if (score < 4) return { text: "低于平均", position: "left-[15%]" }
    if (score < 7) return { text: "处于平均", position: "left-[50%]" }
    return { text: "高于平均", position: "left-[85%]" }
  }

  const status = getStatus(score)

  // 根据分数确定评价
  const getEvaluation = (dimension: SkinDimension, score: number): string => {
    if (score >= 7) return `你的肌肤${name}很好`
    if (score >= 4) return `你的肌肤${name}一般`
    return `你的肌肤${name}较差`
  }

  return (
    <div className={`w-full bg-white p-5 ${className}`}>
      {/* 维度标题 */}
      <div className="flex items-center mb-4">
        <div className={`w-1 h-6 ${color} rounded-full mr-2`}></div>
        <h2 className="text-xl font-bold text-[#212121]">{name}</h2>
      </div>

      {/* 分数显示 */}
      <div className="flex justify-center mb-4">
        <div className="bg-gray-50 px-4 py-2 rounded-md">
          <span className="text-2xl font-bold">{score.toFixed(1)}</span>
        </div>
      </div>

      {/* 进度条 */}
      <div className="relative mb-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700"></div>
        </div>

        {/* 指示器 */}
        <div className={`absolute top-0 ${status.position} transform -translate-x-1/2`}>
          <div className="w-4 h-4 bg-blue-700 rounded-full border-2 border-white shadow-md -mt-1"></div>
        </div>

        {/* 状态标签 */}
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <span>低于平均</span>
          <span>处于平均</span>
          <span>高于平均</span>
        </div>
      </div>

      {/* 评价结果 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#212121] mb-3">{getEvaluation(dimension, score)}</h3>
        <ul className="space-y-3">
          {analysisPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gray-400 mr-1">•</span>
              <span className="text-[#45464a]">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 推荐产品 */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#212121] mb-3">推荐产品</h3>
        <p className="text-[#45464a] mb-4">{recommendation}</p>

        {productImage && (
          <div className="w-full h-[200px] relative">
            <Image src={productImage || "/placeholder.svg"} alt="推荐产品" fill className="object-contain" />
          </div>
        )}
      </div>
    </div>
  )
}
