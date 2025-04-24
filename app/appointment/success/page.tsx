"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, MoreHorizontal, Clock, Calendar, MapPin, Phone, User, Check } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function AppointmentSuccessPage() {
  const searchParams = useSearchParams()

  // 从URL参数获取预约信息，或使用默认值
  const serviceName = searchParams.get("serviceName") || "痘痘护理"
  const customerName = searchParams.get("customerName") || "李建华"
  const phoneNumber = searchParams.get("phoneNumber") || "18406798738"
  const storeName = searchParams.get("storeName") || "常州泰富"
  const appointmentDate = searchParams.get("date") || "2025.04.24"
  const appointmentTime = searchParams.get("time") || "10:00-10:45"
  const serviceDuration = searchParams.get("duration") || "105分钟"
  const appointmentId = searchParams.get("appointmentId") || "1"

  // 动画效果
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // 页面加载后显示成功动画
    const timer = setTimeout(() => {
      setShowSuccess(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-gray-100 overflow-auto relative flex flex-col">
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
        <h1 className="text-xl font-bold text-center flex-1">预约详情</h1>
        <button className="p-2">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </header>

      {/* Success Modal */}
      <div className="flex-1 p-4 flex flex-col items-center justify-center">
        <div
          className={`w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform ${showSuccess ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          {/* Success Header */}
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#14448b]">预约成功</h2>
          </div>

          {/* Appointment Details */}
          <div className="bg-gray-50 p-6">
            <h3 className="text-xl font-bold text-center mb-4">{serviceName}</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500">
                  <User className="w-5 h-5 mr-2" />
                  <span>姓名</span>
                </div>
                <span className="font-medium">{customerName}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>电话</span>
                </div>
                <span className="font-medium">{phoneNumber}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>预约门店</span>
                </div>
                <span className="font-medium">{storeName}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>预约时间</span>
                </div>
                <span className="font-medium">
                  {appointmentDate} {appointmentTime}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>服务时长</span>
                </div>
                <span className="font-medium">{serviceDuration}</span>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="p-6">
            <h4 className="text-gray-500 mb-2">温馨提示：</h4>
            <ol className="text-sm text-gray-500 space-y-2">
              <li>1、仅限预约的会员本人到店使用</li>
              <li>
                2、如您迟到小于等于15分钟，您的护理时间可能会被相应缩短；若您迟到超过15分钟，将被视为自动放弃此服务预约
              </li>
            </ol>
          </div>

          {/* Action Button */}
          <div className="p-6 pt-0">
            <Link
              href={`/appointment/detail/${appointmentId}`}
              className="block w-full py-3 bg-[#14448b] text-white text-center rounded-lg font-medium"
            >
              预约详情
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
