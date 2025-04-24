"use client"

import StackedSurveyOptions from "@/components/stacked-survey-options"

export default function StackedSurveyPage() {
  // 肤质类型选项
  const skinTypes = [
    { id: "dry-no-flaking", label: "干性 无脱屑" },
    { id: "dry-flaking", label: "干性 有脱屑" },
    { id: "normal", label: "中性" },
    { id: "combination-flaking", label: "混合 有脱屑" },
    { id: "combination-no-flaking", label: "混合 无脱屑" },
    { id: "combination-acne", label: "混合 有粉刺痘痘" },
    { id: "oily-acne", label: "油性 有粉刺痘痘" },
    { id: "oily-no-acne", label: "油性 无粉刺痘痘" },
    {
      id: "variable",
      label: "我肤质跟天气状况、饮食习惯、护肤习惯改变有关",
    },
    { id: "unknown", label: "我不知道" },
  ]

  // 护肤目标选项
  const skinGoals = [
    { id: "hydration", label: "补水保湿", description: "改善干燥、缺水问题" },
    { id: "oil-control", label: "控油平衡", description: "减少出油、收缩毛孔" },
    { id: "acne", label: "祛痘祛印", description: "改善痘痘、痘印问题" },
    { id: "brightening", label: "美白提亮", description: "改善暗沉、提亮肤色" },
    { id: "anti-aging", label: "抗老紧致", description: "改善细纹、提升紧致度" },
    { id: "sensitive", label: "舒缓修护", description: "改善敏感、泛红问题" },
  ]

  // 护肤习惯选项
  const skinCareHabits = [
    { id: "basic", label: "基础护理", description: "清洁、爽肤、保湿" },
    { id: "medium", label: "进阶护理", description: "基础护理 + 精华、面膜" },
    { id: "advanced", label: "高级护理", description: "进阶护理 + 眼霜、颈霜、防晒" },
    { id: "professional", label: "专业护理", description: "高级护理 + 定期专业护理" },
  ]

  const handleSkinTypeSelection = (selectedIds: string[]) => {
    console.log("Selected skin type:", selectedIds)
  }

  const handleSkinGoalsSelection = (selectedIds: string[]) => {
    console.log("Selected skin goals:", selectedIds)
  }

  const handleHabitsSelection = (selectedIds: string[]) => {
    console.log("Selected habits:", selectedIds)
  }

  return (
    <div className="max-w-[375px] mx-auto bg-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">肌肤调查问卷</h1>

      <div className="space-y-8">
        <StackedSurveyOptions
          title="肤质类型"
          options={skinTypes}
          multiple={false}
          initialSelected={["normal"]}
          onChange={handleSkinTypeSelection}
        />

        <StackedSurveyOptions
          title="护肤目标"
          options={skinGoals}
          multiple={true}
          onChange={handleSkinGoalsSelection}
        />

        <StackedSurveyOptions
          title="护肤习惯"
          options={skinCareHabits}
          multiple={false}
          onChange={handleHabitsSelection}
        />

        <div className="pt-4">
          <button className="w-full bg-[#14448b] text-white py-3 rounded-full font-medium">提交</button>
        </div>
      </div>
    </div>
  )
}
