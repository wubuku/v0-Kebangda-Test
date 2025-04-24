"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, X } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function AppointmentHistoryPage() {
  const searchParams = useSearchParams()
  const showCanceledMessage = searchParams.get("canceled") === "true"
  const [showNotification, setShowNotification] = useState(showCanceledMessage)

  // 当URL参数变化时更新通知状态
  useEffect(() => {
    setShowNotification(showCanceledMessage)

    // 5秒后自动关闭通知
    if (showCanceledMessage) {
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [showCanceledMessage])

  // 模拟预约历史数据
  const appointments = [
    {
      id: "1",
      serviceName: "痘痘护理",
      storeName: "常州泰富",
      date: "2025.04.24",
      time: "10:00-10:45",
      status: "upcoming", // upcoming, completed, canceled
    },
    {
      id: "2",
      serviceName: "美白护理",
      storeName: "常州泰富",
      date: "2025.04.15",
      time: "14:30-15:15",
      status: "completed",
    },
    {
      id: "3",
      serviceName: "面部护理",
      storeName: "常州泰富",
      date: "2025.03.30",
      time: "11:00-11:45",
      status: "canceled",
    },
  ]

  // 获取状态标签
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "upcoming":
        return <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded text-xs">即将到来</span>
      case "completed":
        return <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs">已完成</span>
      case "canceled":
        return <span className="text-red-600 bg-red-50 px-2 py-1 rounded text-xs">已取消</span>
      default:
        return null
    }
  }

  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-gray-50 overflow-auto relative flex flex-col">
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
      <header className="px-5 py-4 flex items-center justify-between bg-white border-b border-gray-100">
        <Link href="/home" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">我的预约</h1>
        <div className="w-6"></div> {/* 占位，保持标题居中 */}
      </header>

      {/* Canceled Notification */}
      {showNotification && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12L10 17L19 8"
                  stroke="green"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-green-800">预约已成功取消</span>
          </div>
          <button onClick={() => setShowNotification(false)} className="text-green-800">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Appointment List */}
      <div className="flex-1 p-4">
        <h2 className="font-bold mb-4">预约记录</h2>

        <div className="space-y-4">
          {appointments.map((appointment) => (
            <Link
              key={appointment.id}
              href={`/appointment/detail/${appointment.id}`}
              className="block bg-white rounded-lg p-4 shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">{appointment.serviceName}</h3>
                {getStatusLabel(appointment.status)}
              </div>

              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{appointment.storeName}</span>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{appointment.date}</span>
                </div>

                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{appointment.time}</span>
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <div className="flex items-center text-[#14448b]">
                  <span className="text-sm">查看详情</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
