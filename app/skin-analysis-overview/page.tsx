"use client"

import SkinAnalysisOverview from "@/components/skin-analysis-overview"

export default function SkinAnalysisOverviewPage() {
  // 示例数据
  const skinDimensions = [
    { name: "肌肤光泽度", score: 10.0 },
    { name: "色斑", score: 9.4 },
    { name: "细腻度", score: 7.4 },
    { name: "紧致度", score: 6.4 },
    { name: "皱纹", score: 9.4 },
    { name: "痘痘", score: 8.4 },
  ]

  const skinSummary = "你的肌肤干油性适中，皮肤比较细腻，毛孔细小，皮质分泌不足，缺乏水分，无光泽，容易出现脱皮现象。"

  const careRecommendations = [
    "坚持温和清洁、适度保湿就可以了",
    "针对痘痘情况，可以局部使用急救型祛痘产品",
    "要坚持防晒哦，不仅能防晒黑，还能防晒老哈",
  ]

  return (
    <div className="max-w-[375px] mx-auto bg-[#f6f7f8] min-h-screen">
      <header className="bg-white p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-center">肌肤分析报告</h1>
      </header>

      <div className="p-4">
        <SkinAnalysisOverview dimensions={skinDimensions} summary={skinSummary} recommendations={careRecommendations} />
      </div>
    </div>
  )
}
