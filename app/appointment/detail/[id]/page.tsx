"use client"

import { useState } from "react"
import { ChevronLeft, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface AppointmentDetailProps {
  params: {
    id: string
  }
}

export default function AppointmentDetailPage({ params }: AppointmentDetailProps) {
  const router = useRouter()
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [isCancelling, setIsCancelling] = useState(false)

  // 模拟预约数据
  const appointmentData = {
    id: params.id,
    serviceName: "痘痘护理",
    duration: "105分钟",
    price: 850,
    customerName: "李建华",
    phoneNumber: "18406798738",
    storeName: "常州泰富",
    appointmentDate: "2025.04.24",
    appointmentTime: "10:00-10:45",
    serviceDuration: "105分钟",
    status: "upcoming", // upcoming, completed, canceled
    serviceImage: "/placeholder.svg?height=100&width=100",
  }

  // 处理取消预约
  const handleCancelAppointment = () => {
    setIsCancelling(true)

    // 模拟API请求
    setTimeout(() => {
      setIsCancelling(false)
      setShowCancelModal(false)
      // 导航回预约历史页面
      router.push("/appointment/history?canceled=true")
    }, 1000)
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
        <Link href="/appointment/history" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">预约详情</h1>
        <div className="flex items-center">
          <button className="p-2">
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="black" />
            </svg>
          </button>
        </div>
      </header>

      {/* Service Info */}
      <div className="p-4 flex items-center border-b border-gray-100">
        <div className="w-[100px] h-[100px] rounded-md overflow-hidden mr-4">
          <Image
            src={appointmentData.serviceImage || "/placeholder.svg"}
            alt={appointmentData.serviceName}
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">
            {appointmentData.serviceName}({appointmentData.duration})
          </h2>
          <p className="text-2xl text-red-500 font-medium mt-2">¥ {appointmentData.price}</p>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="flex-1">
        {/* Customer Info */}
        <div className="border-b border-gray-100">
          <div className="flex justify-between items-center px-4 py-5">
            <span className="text-gray-500">姓名</span>
            <span className="font-medium">{appointmentData.customerName}</span>
          </div>
        </div>

        <div className="border-b border-gray-100">
          <div className="flex justify-between items-center px-4 py-5">
            <span className="text-gray-500">电话</span>
            <span className="font-medium">{appointmentData.phoneNumber}</span>
          </div>
        </div>

        <div className="border-b border-gray-100">
          <div className="flex justify-between items-center px-4 py-5">
            <span className="text-gray-500">预约门店</span>
            <span className="font-medium">{appointmentData.storeName}</span>
          </div>
        </div>

        <div className="border-b border-gray-100">
          <div className="flex justify-between items-center px-4 py-5">
            <span className="text-gray-500">预约时间</span>
            <span className="font-medium">
              {appointmentData.appointmentDate} {appointmentData.appointmentTime}
            </span>
          </div>
        </div>

        <div className="border-b border-gray-100">
          <div className="flex justify-between items-center px-4 py-5">
            <span className="text-gray-500">服务时长</span>
            <span className="font-medium">{appointmentData.serviceDuration}</span>
          </div>
        </div>

        {/* Notice */}
        <div className="p-4">
          <h3 className="text-gray-500 mb-4">温馨提示：</h3>
          <ol className="text-sm text-gray-500 space-y-4">
            <li>1、仅限预约的会员本人到店使用</li>
            <li>
              2、如您迟到小于等于15分钟，您的护理时间可能会被相应缩短；若您迟到超过15分钟，将被视为自动放弃此服务预约
            </li>
          </ol>
        </div>
      </div>

      {/* Cancel Button */}
      {appointmentData.status === "upcoming" && (
        <div className="p-4">
          <button
            onClick={() => setShowCancelModal(true)}
            className="w-full py-4 bg-red-500 text-white text-center rounded-full font-medium"
          >
            取消预约
          </button>
        </div>
      )}

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[300px] p-6">
            <h3 className="text-lg font-bold text-center mb-4">确认取消预约</h3>
            <p className="text-gray-600 text-center mb-6">您确定要取消此次预约吗？取消后将无法恢复。</p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded-lg"
                disabled={isCancelling}
              >
                返回
              </button>
              <button
                onClick={handleCancelAppointment}
                className="flex-1 py-2 bg-red-500 text-white rounded-lg"
                disabled={isCancelling}
              >
                {isCancelling ? "取消中..." : "确认取消"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
