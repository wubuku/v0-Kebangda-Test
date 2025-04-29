"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import TextSurveyGrid from "@/components/text-survey-grid"
import SurveyOptionGrid from "@/components/survey-option-grid"
import StackedSurveyOptions from "@/components/stacked-survey-options"
import { SprayIcon, OilDropperIcon, BottleIcon, TubeIcon, JarIcon, MaskIcon } from "@/components/product-icons"

export default function ComprehensiveSurveyPage() {
  // 年龄段选项
  const ageOptions = [
    { id: "18-25", label: "18-25岁" },
    { id: "25-35", label: "25-35岁" },
    { id: "35-45", label: "35-45岁" },
    { id: "45+", label: "45岁以上" },
  ]

  // 肤质类型选项
  const skinTypeOptions = [
    { id: "dry", label: "干性" },
    { id: "normal", label: "中性" },
    { id: "combination", label: "混合" },
    { id: "oily", label: "油性" },
    { id: "acne", label: "痘肌" },
    { id: "unknown", label: "我不知道" },
  ]

  // 肤色问题选项
  const skinToneOptions = [
    { id: "fair", label: "肤色偏白" },
    { id: "yellowish", label: "肤色淡黄" },
    { id: "dark-yellow", label: "肤色暗黄" },
    { id: "dark", label: "肤色偏黑" },
    { id: "uneven", label: "肤色不均/大面积色斑" },
    { id: "unknown", label: "我不知道" },
  ]

  // 皮肤瑕疵选项
  const skinTextureOptions = [
    { id: "large-pores", label: "毛孔粗大" },
    { id: "acne-scars", label: "痘坑" },
    { id: "blackheads", label: "黑痘印" },
    { id: "red-marks", label: "红痘印" },
    { id: "none", label: "以上均无" },
  ]

  // 面部肌肤敏感问题选项
  const skinSensitivityOptions = [
    { id: "tightness", label: "紧绷" },
    { id: "stinging", label: "刺痛" },
    { id: "itching", label: "瘙痒" },
    { id: "redness", label: "遇热发烫" },
    { id: "no-reaction", label: "无故发烫" },
    { id: "none", label: "以上均无" },
  ]

  // 护肤产品选项
  const skinCareProducts = [
    { id: "spray", label: "喷雾", icon: <SprayIcon /> },
    { id: "facial-oil", label: "护肤油", icon: <OilDropperIcon /> },
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

  // 生活习惯选项
  const lifestyleOptions = [
    { id: "high-sugar", label: "高糖饮食/高脂饮食/高奶饮食", span: "full" },
    { id: "smoking", label: "抽烟/被动待在有烟雾环境", span: "full" },
    { id: "light-diet", label: "清淡的饮食", span: "half" },
    { id: "alcohol", label: "饮酒", span: "half" },
    { id: "stay-up", label: "熬夜/通宵", span: "half" },
    { id: "none", label: "以上均无", span: "half" },
  ]

  // 最近使用的产品系列选项
  const treatmentOptions = [
    { id: "acne", label: "祛痘项目/刷酸" },
    { id: "embryonic", label: "中胚导入项目" },
    { id: "firming", label: "紧致提升项目" },
    { id: "laser", label: "激光项目" },
    { id: "injection", label: "注射项目" },
    { id: "photon", label: "光子项目" },
    { id: "none", label: "以上均无" },
  ]

  // 状态管理
  const [selectedAge, setSelectedAge] = useState<string[]>([])
  const [selectedSkinType, setSelectedSkinType] = useState<string[]>([])
  const [selectedSkinTone, setSelectedSkinTone] = useState<string[]>([])
  const [selectedSkinTexture, setSelectedSkinTexture] = useState<string[]>([])
  const [selectedSkinSensitivity, setSelectedSkinSensitivity] = useState<string[]>([])
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [selectedLifestyle, setSelectedLifestyle] = useState<string[]>([])
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([])

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      age: selectedAge,
      skinType: selectedSkinType,
      skinTone: selectedSkinTone,
      skinTexture: selectedSkinTexture,
      skinSensitivity: selectedSkinSensitivity,
      products: selectedProducts,
      lifestyle: selectedLifestyle,
      treatments: selectedTreatments,
    })
    // 这里可以添加提交到服务器的逻辑
  }

  return (
    <div className="max-w-[375px] mx-auto min-h-screen bg-gray-100">
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
        <Link href="/home" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">肌肤检测</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2">
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="black" />
            </svg>
          </button>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-gray-700 text-white text-xs px-4 py-2 flex">
        <span className="mr-2">1. 皮肤部分干燥程度</span>
        <span className="mr-2">2. 肌肤自然光泽度</span>
        <span>3. 痘T部位</span>
      </div>

      {/* Survey Content */}
      <div className="bg-white rounded-t-3xl mt-4 p-5">
        <h2 className="text-xl font-bold mb-6">美容咨询问卷</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 年龄段 */}
          <div>
            <h3 className="text-base mb-3">您的年龄段</h3>
            <div className="grid grid-cols-4 gap-2">
              {ageOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`py-2 px-3 text-center text-sm rounded-md ${
                    selectedAge.includes(option.id) ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedAge([option.id])}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 肤质类型 */}
          <div>
            <h3 className="text-base mb-3">肤质类型</h3>
            <div className="grid grid-cols-4 gap-2">
              {skinTypeOptions.slice(0, 4).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`py-2 px-3 text-center text-sm rounded-md ${
                    selectedSkinType.includes(option.id) ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedSkinType([option.id])}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {skinTypeOptions.slice(4).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`py-2 px-3 text-center text-sm rounded-md ${
                    selectedSkinType.includes(option.id) ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedSkinType([option.id])}
                >
                  {option.label}
                </button>
              ))}
              <div className="col-span-2"></div> {/* 空白占位 */}
            </div>
          </div>

          {/* 肤色问题 */}
          <div>
            <h3 className="text-base mb-3">肤色问题</h3>
            <div className="grid grid-cols-4 gap-2">
              {skinToneOptions.slice(0, 4).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`py-2 px-3 text-center text-sm rounded-md ${
                    selectedSkinTone.includes(option.id) ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedSkinTone([option.id])}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {skinToneOptions.slice(4).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`py-2 px-3 text-center text-sm rounded-md ${
                    selectedSkinTone.includes(option.id) ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedSkinTone([option.id])}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 皮肤瑕疵 */}
          <div>
            <h3 className="text-base mb-3">皮肤瑕疵(多选)</h3>
            <div className="grid grid-cols-4 gap-2">
              {skinTextureOptions.slice(0, 4).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`py-2 px-3 text-center text-sm rounded-md ${
                    selectedSkinTexture.includes(option.id) ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => {
                    if (option.id === "none") {
                      setSelectedSkinTexture(["none"])
                    } else {
                      const newSelected = selectedSkinTexture.includes(option.id)
                        ? selectedSkinTexture.filter((id) => id !== option.id)
                        : [...selectedSkinTexture.filter((id) => id !== "none"), option.id]
                      setSelectedSkinTexture(newSelected)
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {skinTextureOptions.slice(4).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`py-2 px-3 text-center text-sm rounded-md ${
                    selectedSkinTexture.includes(option.id) ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => {
                    if (option.id === "none") {
                      setSelectedSkinTexture(["none"])
                    } else {
                      const newSelected = selectedSkinTexture.includes(option.id)
                        ? selectedSkinTexture.filter((id) => id !== option.id)
                        : [...selectedSkinTexture.filter((id) => id !== "none"), option.id]
                      setSelectedSkinTexture(newSelected)
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
              <div className="col-span-3"></div> {/* 空白占位 */}
            </div>
          </div>

          {/* 面部肌肤敏感问题 */}
          <div>
            <h3 className="text-base mb-3">面部肌肤敏感问题(多选)</h3>
            <div className="grid grid-cols-4 gap-2">
              {skinSensitivityOptions.slice(0, 4).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`py-2 px-3 text-center text-sm rounded-md ${
                    selectedSkinSensitivity.includes(option.id)
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => {
                    if (option.id === "none") {
                      setSelectedSkinSensitivity(["none"])
                    } else {
                      const newSelected = selectedSkinSensitivity.includes(option.id)
                        ? selectedSkinSensitivity.filter((id) => id !== option.id)
                        : [...selectedSkinSensitivity.filter((id) => id !== "none"), option.id]
                      setSelectedSkinSensitivity(newSelected)
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {skinSensitivityOptions.slice(4).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`py-2 px-3 text-center text-sm rounded-md ${
                    selectedSkinSensitivity.includes(option.id)
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => {
                    if (option.id === "none") {
                      setSelectedSkinSensitivity(["none"])
                    } else {
                      const newSelected = selectedSkinSensitivity.includes(option.id)
                        ? selectedSkinSensitivity.filter((id) => id !== option.id)
                        : [...selectedSkinSensitivity.filter((id) => id !== "none"), option.id]
                      setSelectedSkinSensitivity(newSelected)
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
              <div className="col-span-2"></div> {/* 空白占位 */}
            </div>
          </div>

          {/* 最近使用的产品系列 */}
          <div>
            <h3 className="text-base mb-3">最近使用的产品系列(多选)</h3>
            <SurveyOptionGrid
              title=""
              options={skinCareProducts}
              multiple={true}
              initialSelected={selectedProducts}
              onChange={setSelectedProducts}
            />
          </div>

          {/* 生活习惯 */}
          <div>
            <h3 className="text-base mb-3">生活习惯(多选)</h3>
            <TextSurveyGrid
              title=""
              options={lifestyleOptions}
              multiple={true}
              initialSelected={selectedLifestyle}
              onChange={setSelectedLifestyle}
            />
          </div>

          {/* 最近使用的产品系列 */}
          <div>
            <h3 className="text-base mb-3">最近使用的产品系列(多选)</h3>
            <StackedSurveyOptions
              title=""
              options={treatmentOptions}
              multiple={true}
              initialSelected={selectedTreatments}
              onChange={setSelectedTreatments}
            />
          </div>

          {/* 提交按钮 */}
          <button type="submit" className="w-full py-4 bg-[#14448b] text-white text-center rounded-lg font-medium mt-8">
            继续
          </button>
        </form>
      </div>
    </div>
  )
}
