"use client"

import { useState } from "react"

export interface SurveyOption {
  id: string
  label: string
  span?: "full" | "half" | "third" // 控制选项宽度
}

export interface TextSurveyGridProps {
  title: string
  options: SurveyOption[]
  multiple?: boolean
  initialSelected?: string[]
  onChange?: (selectedIds: string[]) => void
  className?: string
}

export default function TextSurveyGrid({
  title,
  options,
  multiple = false,
  initialSelected = [],
  onChange,
  className = "",
}: TextSurveyGridProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(initialSelected)

  const handleOptionClick = (optionId: string) => {
    let newSelected: string[]

    if (multiple) {
      // 多选逻辑：切换选中状态
      if (selectedOptions.includes(optionId)) {
        newSelected = selectedOptions.filter((id) => id !== optionId)
      } else {
        newSelected = [...selectedOptions, optionId]
      }
    } else {
      // 单选逻辑：只能选择一个
      newSelected = [optionId]
    }

    setSelectedOptions(newSelected)
    onChange?.(newSelected)
  }

  const isSelected = (optionId: string) => selectedOptions.includes(optionId)

  // 根据span属性确定CSS类
  const getOptionClassName = (option: SurveyOption) => {
    const baseClass = `py-4 px-6 rounded-md transition-colors ${isSelected(option.id) ? "bg-blue-100" : "bg-gray-100"}`

    switch (option.span) {
      case "full":
        return `${baseClass} col-span-3`
      case "half":
        return `${baseClass} col-span-3 md:col-span-1.5`
      default:
        return `${baseClass} col-span-1.5 md:col-span-1`
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-lg font-medium mb-4">
        {title}
        {multiple ? "(多选)" : "(单选)"}
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            className={getOptionClassName(option)}
            onClick={() => handleOptionClick(option.id)}
            aria-pressed={isSelected(option.id)}
          >
            <span className="text-center block">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
