"use client"

import SurveyOptionGrid from "@/components/survey-option-grid"
import { SprayIcon, OilDropperIcon, BottleIcon, TubeIcon, JarIcon, MaskIcon } from "@/components/product-icons"

export default function SurveyPage() {
  // 产品选项数据
  const skinCareProducts = [
    { id: "spray", label: "喷雾", icon: <SprayIcon /> },
    { id: "oil", label: "护肤油", icon: <OilDropperIcon /> },
    { id: "moisturizer", label: "保湿精华", icon: <BottleIcon /> },
    { id: "eye-cream", label: "眼霜", icon: <TubeIcon /> },
    { id: "antioxidant", label: "抗氧化精华", icon: <BottleIcon /> },
    { id: "repair", label: "修复精华", icon: <BottleIcon /> },
    { id: "lotion", label: "乳液", icon: "/placeholder.svg?height=40&width=40" },
    { id: "cream", label: "面霜", icon: <JarIcon /> },
    { id: "sunscreen", label: "防晒/隔离", icon: "/placeholder.svg?height=40&width=40" },
    { id: "foundation", label: "遮瑕粉底", icon: "/placeholder.svg?height=40&width=40" },
    { id: "mask", label: "面膜", icon: <MaskIcon /> },
    { id: "acne-gel", label: "祛痘凝胶", icon: "/placeholder.svg?height=40&width=40" },
  ]

  // 肤质类型选项
  const skinTypes = [
    { id: "dry", label: "干性", icon: "/placeholder.svg?height=40&width=40" },
    { id: "oily", label: "油性", icon: "/placeholder.svg?height=40&width=40" },
    { id: "combination", label: "混合性", icon: "/placeholder.svg?height=40&width=40" },
    { id: "sensitive", label: "敏感性", icon: "/placeholder.svg?height=40&width=40" },
    { id: "normal", label: "中性", icon: "/placeholder.svg?height=40&width=40" },
    { id: "acne-prone", label: "易长痘", icon: "/placeholder.svg?height=40&width=40" },
  ]

  const handleProductSelection = (selectedIds: string[]) => {
    console.log("Selected products:", selectedIds)
  }

  const handleSkinTypeSelection = (selectedIds: string[]) => {
    console.log("Selected skin type:", selectedIds)
  }

  return (
    <div className="max-w-[375px] mx-auto bg-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">肌肤调查问卷</h1>

      <div className="space-y-8">
        <SurveyOptionGrid
          title="最近使用的产品系列"
          options={skinCareProducts}
          multiple={true}
          initialSelected={["spray"]}
          onChange={handleProductSelection}
        />

        <SurveyOptionGrid
          title="您的肤质类型"
          options={skinTypes}
          multiple={false}
          onChange={handleSkinTypeSelection}
        />

        <div className="pt-4">
          <button className="w-full bg-[#14448b] text-white py-3 rounded-lg font-medium">提交</button>
        </div>
      </div>
    </div>
  )
}
