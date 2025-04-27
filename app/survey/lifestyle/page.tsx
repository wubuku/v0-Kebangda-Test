"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import StackedSurveyOptions from "@/components/stacked-survey-options"

export default function LifestyleSurveyPage() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  // 生活习惯选项
  const lifestyleOptions = [
    { id: "high-sugar", label: "高糖饮食" },
    { id: "high-fat", label: "高脂/煎炒炸饮食" },
    { id: "high-dairy", label: "高奶饮食" },
    { id: "light-diet", label: "清淡饮食/素食少肉" },
    { id: "vegan", label: "无油无肉纯素食" },
    { id: "alcohol", label: "饮酒" },
    { id: "stay-up-late", label: "熬夜/通宵" },
    { id: "smoking", label: "抽烟/抽电子雾化烟" },
    { id: "pollution", label: "长久暴露在污染环境" },
    { id: "uv-exposure", label: "长期暴露在紫外线" },
    { id: "screen-time", label: "长期对电子茶衣屏幕" },
  ]

  const handleOptionChange = (selected: string[]) => {
    setSelectedOptions(selected)
    console.log("Selected lifestyle habits:", selected)
  }

  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-[#f6f7f8] flex flex-col">
      {/* Status Bar */}
      <div className="h-10 px-5 flex items-center justify-between bg-white">
        <div className="text-black font-semibold">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 15V9H8V15H6Z" fill="currentColor" />
              <path d="M10 17V7H12V17H10Z" fill="currentColor" />
              <path d="M14 13V11H16V13H14Z" fill="currentColor" />
              <path d="M18 11V13H20V11H18Z" fill="currentColor" />
            </svg>
          </div>
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C8.5 3 5.5 5.2 4.4 8.2C3.4 11 4.1 14.1 6.1 16.2C7.3 17.4 8 19.1 8 20.8V21C8 21.6 8.4 22 9 22H15C15.6 22 16 21.6 16 21V20.8C16 19 16.7 17.4 17.9 16.2C20.3 13.8 21 10 19.1 7C17.5 4.4 14.8 3 12 3Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="w-6 h-3 bg-black rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <header className="px-5 py-4 flex items-center justify-between bg-white border-b border-gray-200">
        <Link href="/survey" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">美容问卷</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="6" r="2" fill="black" />
              <circle cx="12" cy="12" r="2" fill="black" />
              <circle cx="12" cy="18" r="2" fill="black" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="black" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-auto">
        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-[#14448b]">6</span>
            <span className="text-xl text-gray-500 ml-2">/ 7</span>
          </div>
        </div>

        {/* Survey Question */}
        <StackedSurveyOptions
          title="生活习惯"
          options={lifestyleOptions}
          multiple={true}
          initialSelected={selectedOptions}
          onChange={handleOptionChange}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="p-4 flex space-x-4">
        <Link
          href="/survey/previous-question"
          className="flex-1 py-4 border border-[#14448b] text-[#14448b] rounded-full text-center font-medium"
        >
          上一题
        </Link>
        <Link
          href="/survey/next-question"
          className="flex-1 py-4 bg-[#14448b] text-white rounded-full text-center font-medium"
        >
          下一题
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200 w-full">
        <div className="h-full bg-[#14448b] w-[85.7%]"></div>
      </div>
    </div>
  )
}
