"use client"

import { useState } from "react"

export interface SurveyOption {
  id: string
  label: string
  description?: string // 可选的描述文本
}

export interface StackedSurveyOptionsProps {
  title: string
  options: SurveyOption[]
  multiple?: boolean
  initialSelected?: string[]
  onChange?: (selectedIds: string[]) => void
  className?: string
}

export default function StackedSurveyOptions({
  title,
  options,
  multiple = false,
  initialSelected = [],
  onChange,
  className = "",
}: StackedSurveyOptionsProps) {
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

  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-lg font-medium mb-4">
        {title}
        {multiple ? "(多选)" : "(单选)"}
      </h3>
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            className={`w-full py-4 px-6 rounded-full transition-colors text-center ${
              isSelected(option.id) ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => handleOptionClick(option.id)}
            aria-pressed={isSelected(option.id)}
          >
            <span className="block">{option.label}</span>
            {option.description && <span className="text-sm text-gray-500 mt-1 block">{option.description}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}
