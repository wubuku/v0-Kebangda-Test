"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import DatePicker from "@/components/date-picker"
import TimeSlotSelector, { type TimeSlot } from "@/components/time-slot-selector"

export default function SelectTimePage() {
  const searchParams = useSearchParams()
  const storeId = searchParams.get("storeId") || "1"
  const serviceId = searchParams.get("serviceId") || "1"

  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)

  // 设置可选日期范围（今天到未来30天）
  const minDate = new Date()
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 30)

  // 模拟时间段数据
  const timeSlots: TimeSlot[] = [
    { startTime: "09:00", endTime: "09:45", disabled: false },
    { startTime: "09:15", endTime: "10:00", disabled: false },
    { startTime: "09:30", endTime: "10:15", disabled: false },
    { startTime: "09:45", endTime: "10:30", disabled: false },
    { startTime: "10:00", endTime: "10:45", disabled: false },
    { startTime: "10:15", endTime: "11:00", disabled: false },
    { startTime: "10:30", endTime: "11:15", disabled: false },
    { startTime: "10:45", endTime: "11:30", disabled: false },
    { startTime: "11:00", endTime: "11:45", disabled: false },
  ]

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedTimeSlot(null) // 重置时间选择
  }

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot)
  }

  // 格式化日期为YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0]
  }

  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-white overflow-auto relative flex flex-col">
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
      <header className="px-5 py-4 flex items-center justify-between border-b border-gray-100">
        <Link href={`/appointment/service-detail?storeId=${storeId}&serviceId=${serviceId}`} className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">选择预约时间</h1>
        <div className="w-6"></div> {/* 占位，保持标题居中 */}
      </header>

      {/* Progress Steps */}
      <div className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</div>
          <div className="ml-2 text-blue-600 font-medium">选择门店</div>
        </div>
        <div className="flex-1 h-1 bg-blue-600 mx-2"></div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">2</div>
          <div className="ml-2 text-blue-600 font-medium">选择服务</div>
        </div>
        <div className="flex-1 h-1 bg-blue-600 mx-2"></div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">3</div>
          <div className="ml-2 text-blue-600 font-medium">预约时间</div>
        </div>
      </div>

      {/* Selected Info */}
      <div className="px-5 py-3 bg-gray-50 border-y border-gray-200">
        <h2 className="font-medium">已选门店: 常州泰富</h2>
        <p className="text-sm text-gray-500 mt-1">已选服务: 美白护理(30分钟)</p>
      </div>

      {/* Date Selection */}
      <div className="p-4">
        <h3 className="font-bold mb-3">选择日期</h3>
        <DatePicker selectedDate={selectedDate} onDateSelect={handleDateSelect} minDate={minDate} maxDate={maxDate} />
      </div>

      {/* Time Slot Selection */}
      <div className="p-4">
        <h3 className="font-bold mb-3">选择时间</h3>
        <TimeSlotSelector
          timeSlots={timeSlots}
          selectedSlot={selectedTimeSlot}
          onSelectTimeSlot={handleTimeSlotSelect}
          sessionDuration={45}
        />
      </div>

      {/* Bottom Button */}
      <div className="p-4 border-t border-gray-200 bg-white mt-auto">
        <Link
          href={
            selectedTimeSlot
              ? `/appointment/confirm?storeId=${storeId}&serviceId=${serviceId}&date=${formatDate(selectedDate)}&time=${selectedTimeSlot.startTime}`
              : "#"
          }
          className={`w-full py-3 rounded-lg text-center font-medium ${
            selectedTimeSlot ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          onClick={(e) => !selectedTimeSlot && e.preventDefault()}
        >
          确认预约
        </Link>
      </div>
    </div>
  )
}
