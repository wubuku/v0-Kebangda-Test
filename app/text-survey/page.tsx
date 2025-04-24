"use client"

import TextSurveyGrid from "@/components/text-survey-grid"

export default function TextSurveyPage() {
  // 产品选项数据
  const treatmentOptions = [
    { id: "acne", label: "祛痘项目/刷酸", span: "full" },
    { id: "embryonic", label: "中胚导入项目", span: "half" },
    { id: "firming", label: "紧致提升项目", span: "half" },
    { id: "laser", label: "激光项目", span: "third" },
    { id: "injection", label: "注射项目", span: "third" },
    { id: "photon", label: "光子项目", span: "third" },
    { id: "none", label: "以上均无", span: "third" },
  ]

  // 肤质问题选项
  const skinIssues = [
    { id: "acne", label: "痘痘" },
    { id: "blackheads", label: "黑头" },
    { id: "dryness", label: "干燥" },
    { id: "oiliness", label: "出油" },
    { id: "sensitivity", label: "敏感" },
    { id: "redness", label: "泛红" },
    { id: "pigmentation", label: "色斑" },
    { id: "wrinkles", label: "皱纹" },
    { id: "sagging", label: "松弛" },
  ]

  // 护肤习惯选项
  const skinCareHabits = [
    { id: "cleansing", label: "每天双清洁" },
    { id: "toner", label: "使用爽肤水" },
    { id: "essence", label: "使用精华" },
    { id: "sunscreen", label: "每天防晒" },
    { id: "mask", label: "每周敷面膜" },
    { id: "exfoliation", label: "定期去角质" },
  ]

  const handleTreatmentSelection = (selectedIds: string[]) => {
    console.log("Selected treatments:", selectedIds)
  }

  const handleSkinIssuesSelection = (selectedIds: string[]) => {
    console.log("Selected skin issues:", selectedIds)
  }

  const handleHabitsSelection = (selectedIds: string[]) => {
    console.log("Selected habits:", selectedIds)
  }

  return (
    <div className="max-w-[375px] mx-auto bg-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">肌肤调查问卷</h1>

      <div className="space-y-8">
        <TextSurveyGrid
          title="最近使用的产品系列"
          options={treatmentOptions}
          multiple={true}
          onChange={handleTreatmentSelection}
        />

        <TextSurveyGrid
          title="您目前的肌肤问题"
          options={skinIssues}
          multiple={true}
          onChange={handleSkinIssuesSelection}
        />

        <TextSurveyGrid
          title="您的护肤习惯"
          options={skinCareHabits}
          multiple={false}
          onChange={handleHabitsSelection}
        />

        <div className="pt-4">
          <button className="w-full bg-[#14448b] text-white py-3 rounded-lg font-medium">提交</button>
        </div>
      </div>
    </div>
  )
}
