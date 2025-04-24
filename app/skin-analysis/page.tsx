"use client"

import SkinDimensionResult from "@/components/skin-dimension-result"

export default function SkinAnalysisPage() {
  // 光泽度示例数据
  const glowData = {
    dimension: "GLOW" as const,
    score: 10.0,
    analysisPoints: [
      "皮表折光指数高于平均值，天然柔焦膜自带反光板效应",
      "角质层含水量与皮脂均匀度完美平衡，成就釉面瓷光肌",
      "真皮层胶原密度优越，撑起360°无影立体光晕",
    ],
    recommendation: "选择氨基酸类洁面产品，既能清除污垢又不破坏皮脂膜。",
    productImage: "/placeholder.svg?height=200&width=400",
  }

  // 紧致度示例数据
  const firmnessData = {
    dimension: "FIRMNESS" as const,
    score: 6.5,
    analysisPoints: [
      "胶原蛋白和弹性蛋白含量处于平均水平",
      "面部轮廓线条基本清晰，但下颌线略有松弛",
      "皮肤回弹力适中，轻压后恢复速度正常",
    ],
    recommendation: "建议使用含有胶原蛋白和弹性蛋白的精华，每日按摩提升紧致度。",
    productImage: "/placeholder.svg?height=200&width=400",
  }

  // 痘痘示例数据
  const acneData = {
    dimension: "ACNE" as const,
    score: 3.2,
    analysisPoints: ["T区油脂分泌过多，毛孔堵塞明显", "面颊区域有炎性痘痘和痘印", "皮肤屏障功能受损，易受外界刺激"],
    recommendation: "建议使用含有水杨酸的温和清洁产品，控制油脂分泌，减少痘痘生成。",
    productImage: "/placeholder.svg?height=200&width=400",
  }

  return (
    <div className="max-w-[375px] mx-auto bg-[#f6f7f8] min-h-screen">
      <header className="bg-white p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-center">肌肤分析报告</h1>
      </header>

      <div className="p-4 space-y-4">
        <SkinDimensionResult {...glowData} />
        <SkinDimensionResult {...firmnessData} />
        <SkinDimensionResult {...acneData} />
      </div>
    </div>
  )
}
