"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export interface TimeSlot {
  startTime: string
  endTime: string
  available?: boolean
  disabled?: boolean
}

export interface TimeSlotSelectorProps {
  timeSlots: TimeSlot[]
  selectedSlot?: TimeSlot | null
  onSelectTimeSlot?: (slot: TimeSlot) => void
  sessionDuration?: number // 单位：分钟
  className?: string
}

// 计算两个时间之间的分钟差
const getMinutesDifference = (startTime: string, endTime: string): number => {
  const [startHour, startMinute] = startTime.split(":").map(Number)
  const [endHour, endMinute] = endTime.split(":").map(Number)

  const startMinutes = startHour * 60 + startMinute
  const endMinutes = endHour * 60 + endMinute

  return endMinutes - startMinutes
}

// 格式化时间显示
const formatTime = (time: string): string => {
  return time
}

export default function TimeSlotSelector({
  timeSlots,
  selectedSlot = null,
  onSelectTimeSlot,
  sessionDuration = 45, // 默认会话时长为45分钟
  className = "",
}: TimeSlotSelectorProps) {
  const [selected, setSelected] = useState<TimeSlot | null>(selectedSlot)

  // 当外部selectedSlot变化时更新内部状态
  useEffect(() => {
    setSelected(selectedSlot)
  }, [selectedSlot])

  // 计算整个时间段的开始和结束时间
  const overallStartTime = timeSlots.length > 0 ? timeSlots[0].startTime : ""
  const overallEndTime = timeSlots.length > 0 ? timeSlots[timeSlots.length - 1].endTime : ""

  // 计算总时长（分钟）
  const totalDuration = getMinutesDifference(overallStartTime, overallEndTime)

  // 处理时间段选择
  const handleSelectTimeSlot = (slot: TimeSlot) => {
    if (slot.disabled) return

    setSelected(slot)
    if (onSelectTimeSlot) {
      onSelectTimeSlot(slot)
    }
  }

  // 检查时间段是否被选中
  const isSelected = (slot: TimeSlot): boolean => {
    if (!selected) return false
    return slot.startTime === selected.startTime && slot.endTime === selected.endTime
  }

  return (
    <div className={`w-full ${className}`}>
      {/* 总时间段显示 */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">
          {overallStartTime} - {overallEndTime}
        </h3>
        <div className="flex items-center text-gray-400">
          <Clock className="w-5 h-5 mr-1" />
          <span>{totalDuration}分钟</span>
        </div>
      </div>

      {/* 时间段网格 */}
      <div className="grid grid-cols-3 gap-3">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`p-4 rounded-lg text-center transition-all ${
              isSelected(slot)
                ? "border-2 border-[#14448b] bg-[#f6f7f8]"
                : slot.disabled
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-[#f6f7f8] hover:bg-gray-200"
            }`}
            onClick={() => handleSelectTimeSlot(slot)}
            disabled={slot.disabled}
          >
            <div className="text-lg font-medium">{formatTime(slot.startTime)}</div>
            <div className="text-sm text-gray-400 mt-1">
              {formatTime(slot.startTime)} — {formatTime(slot.endTime)}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
