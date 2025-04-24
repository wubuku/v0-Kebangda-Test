"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export interface DatePickerProps {
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
  minDate?: Date
  maxDate?: Date
  className?: string
  showLunarDates?: boolean
}

// 简化的农历日期映射
const LUNAR_DATES: Record<number, string> = {
  1: "初一",
  2: "初二",
  3: "初三",
  4: "初四",
  5: "初五",
  6: "初六",
  7: "初七",
  8: "初八",
  9: "初九",
  10: "初十",
  11: "十一",
  12: "十二",
  13: "十三",
  14: "十四",
  15: "十五",
  16: "十六",
  17: "十七",
  18: "十八",
  19: "十九",
  20: "二十",
  21: "廿一",
  22: "廿二",
  23: "廿三",
  24: "廿四",
  25: "廿五",
  26: "廿六",
  27: "廿七",
  28: "廿八",
  29: "廿九",
  30: "三十",
  31: "三十一",
}

// 获取农历日期（简化版，实际应用中应使用专业库）
const getLunarDate = (day: number): string => {
  return LUNAR_DATES[day] || ""
}

// 获取月份的天数
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate()
}

// 获取月份的第一天是星期几
const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay()
}

export default function DatePicker({
  selectedDate = new Date(),
  onDateSelect,
  minDate,
  maxDate,
  className = "",
  showLunarDates = true,
}: DatePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth())
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear())
  const [selected, setSelected] = useState<Date | null>(selectedDate)

  // 更新日历视图
  useEffect(() => {
    setCurrentMonth(selectedDate.getMonth())
    setCurrentYear(selectedDate.getFullYear())
  }, [selectedDate])

  // 处理月份导航
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  // 处理日期选择
  const handleDateClick = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day)

    // 检查日期是否在允许范围内
    if (minDate && newDate < minDate) return
    if (maxDate && newDate > maxDate) return

    setSelected(newDate)
    if (onDateSelect) {
      onDateSelect(newDate)
    }
  }

  // 检查日期是否是今天
  const isToday = (day: number): boolean => {
    const today = new Date()
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
  }

  // 检查日期是否被选中
  const isSelected = (day: number): boolean => {
    return (
      selected !== null &&
      day === selected.getDate() &&
      currentMonth === selected.getMonth() &&
      currentYear === selected.getFullYear()
    )
  }

  // 检查日期是否可选
  const isDisabled = (day: number): boolean => {
    const date = new Date(currentYear, currentMonth, day)
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  // 生成日历网格
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth)

    const days = []

    // 添加空白格子填充月初
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-16 flex flex-col items-center justify-center">
          <span className="text-transparent">0</span>
          <span className="text-transparent text-xs">占位</span>
        </div>,
      )
    }

    // 添加月份的天数
    for (let day = 1; day <= daysInMonth; day++) {
      const disabled = isDisabled(day)
      const today = isToday(day)
      const selected = isSelected(day)

      days.push(
        <div
          key={day}
          className={`h-16 flex flex-col items-center justify-center relative ${
            disabled ? "opacity-40" : "cursor-pointer"
          }`}
          onClick={() => !disabled && handleDateClick(day)}
        >
          <div
            className={`w-12 h-12 flex flex-col items-center justify-center rounded-lg ${
              selected ? "bg-[#14448b]" : "bg-transparent"
            }`}
          >
            <span
              className={`text-lg font-medium ${selected ? "text-white" : today ? "text-[#14448b]" : "text-black"}`}
            >
              {day}
            </span>
            {showLunarDates && (
              <span className={`text-xs ${selected ? "text-white" : "text-gray-400"}`}>{getLunarDate(day)}</span>
            )}
            {selected && (
              <div className="absolute top-1 right-1">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </div>,
      )
    }

    return days
  }

  // 格式化月份显示
  const formatMonthYear = (): string => {
    return `${currentYear}年${String(currentMonth + 1).padStart(2, "0")}月`
  }

  // 星期几的标题
  const weekDays = ["日", "一", "二", "三", "四", "五", "六"]

  return (
    <div className={`w-full ${className}`}>
      {/* 月份导航 */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="p-2 focus:outline-none" aria-label="上个月">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold">{formatMonthYear()}</h2>
        <button onClick={handleNextMonth} className="p-2 focus:outline-none" aria-label="下个月">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 星期几标题 */}
      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* 日历网格 */}
      <div className="grid grid-cols-7 gap-0">{renderCalendarDays()}</div>
    </div>
  )
}
