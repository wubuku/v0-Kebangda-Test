"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, User, Phone, Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export default function AppointmentConfirmPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // 从URL参数获取预约信息
  const storeId = searchParams.get("storeId") || "1"
  const serviceId = searchParams.get("serviceId") || "1"
  const date = searchParams.get("date") || "2025-04-24"
  const time = searchParams.get("time") || "10:00"

  // 表单状态
  const [name, setName] = useState("李建华")
  const [phone, setPhone] = useState("18406798738")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 模拟服务和门店数据
  const serviceInfo = {
    id: serviceId,
    name: "痘痘护理",
    duration: "105分钟",
    price: 850,
  }

  const storeInfo = {
    id: storeId,
    name: "常州泰富",
    address: "江苏省常州市钟楼区延陵西路95-97号泰富百货一楼科邦达柜台",
  }

  // 格式化日期显示
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`
  }

  // 计算结束时间
  const calculateEndTime = (startTime: string, durationMinutes: number): string => {
    const [hours, minutes] = startTime.split(":").map(Number)
    const startDate = new Date()
    startDate.setHours(hours, minutes, 0)

    const endDate = new Date(startDate.getTime() + durationMinutes * 60000)
    const endHours = String(endDate.getHours()).padStart(2, "0")
    const endMinutes = String(endDate.getMinutes()).padStart(2, "0")

    return `${endHours}:${endMinutes}`
  }

  // 提交预约
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 模拟API请求
    setTimeout(() => {
      // 计算结束时间
      const endTime = calculateEndTime(time, Number.parseInt(serviceInfo.duration))
      const timeRange = `${time}-${endTime}`

      // 导航到成功页面并传递预约信息
      router.push(
        `/appointment/success?serviceName=${serviceInfo.name}&customerName=${name}&phoneNumber=${phone}&storeName=${storeInfo.name}&date=${formatDate(date)}&time=${timeRange}&duration=${serviceInfo.duration}`,
      )
    }, 1000)
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
        <Link
          href={`/appointment/select-time?storeId=${storeId}&serviceId=${serviceId}&date=${date}&time=${time}`}
          className="p-1"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">确认预约</h1>
        <div className="w-6"></div> {/* 占位，保持标题居中 */}
      </header>

      {/* Progress Steps */}
      <div className="px-5 py-4 flex items-center justify-between bg-white">
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

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 p-4">
        {/* Service Info */}
        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold mb-4">预约信息</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
              <div>
                <div className="font-medium">{storeInfo.name}</div>
                <div className="text-sm text-gray-500">{storeInfo.address}</div>
              </div>
            </div>

            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gray-400 mr-2" />
              <div className="font-medium">{formatDate(date)}</div>
            </div>

            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-400 mr-2" />
              <div className="font-medium">
                {time} - {calculateEndTime(time, Number.parseInt(serviceInfo.duration))}
                <span className="text-sm text-gray-500 ml-2">({serviceInfo.duration})</span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <div className="font-bold">{serviceInfo.name}</div>
              <div className="text-red-500 font-medium mt-1">¥ {serviceInfo.price}</div>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold mb-4">预约人信息</h2>

          <div className="space-y-4">
            <div className="flex items-center border-b border-gray-100 pb-3">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="请输入姓名"
                className="flex-1 outline-none"
                required
              />
            </div>

            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="请输入手机号"
                className="flex-1 outline-none"
                required
                pattern="[0-9]{11}"
              />
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="bg-white rounded-lg p-4 mb-4">
          <h3 className="text-gray-500 mb-2">温馨提示：</h3>
          <ol className="text-sm text-gray-500 space-y-2">
            <li>1、仅限预约的会员本人到店使用</li>
            <li>
              2、如您迟到小于等于15分钟，您的护理时间可能会被相应缩短；若您迟到超过15分钟，将被视为自动放弃此服务预约
            </li>
          </ol>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#14448b] text-white text-center rounded-lg font-medium mt-4"
        >
          {isSubmitting ? "提交中..." : "确认预约"}
        </button>
      </form>
    </div>
  )
}
