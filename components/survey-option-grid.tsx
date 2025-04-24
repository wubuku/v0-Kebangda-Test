"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

export interface SurveyOption {
  id: string
  label: string
  icon: React.ReactNode | string
}

export interface SurveyOptionGridProps {
  title: string
  options: SurveyOption[]
  multiple?: boolean
  initialSelected?: string[]
  onChange?: (selectedIds: string[]) => void
  className?: string
}

export default function SurveyOptionGrid({
  title,
  options,
  multiple = false,
  initialSelected = [],
  onChange,
  className = "",
}: SurveyOptionGridProps) {
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
      <div className="grid grid-cols-3 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            className={`flex flex-col items-center justify-center p-4 rounded-md transition-colors ${
              isSelected(option.id) ? "bg-blue-100" : "bg-gray-100"
            }`}
            onClick={() => handleOptionClick(option.id)}
            aria-pressed={isSelected(option.id)}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              {typeof option.icon === "string" ? (
                <Image src={option.icon || "/placeholder.svg"} alt={option.label} width={40} height={40} />
              ) : (
                option.icon
              )}
            </div>
            <span className="text-sm text-center">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
