"use client"

import { useState } from "react"
import { ChevronLeft, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface OrderItem {
  id: string
  title: string
  imageUrl: string
  points: number
  cash: number
  quantity: number
  expiryDate: string
}

export default function OrderConfirmationPage() {
  // 示例订单数据
  const orderItems: OrderItem[] = [
    {
      id: "1",
      title: "臻白焕彩维生素CECE复合修护精华液4ml*5",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-HjIYhDHQTN9JdrwmhWXmwGXsJ6LRMK.png",
      points: 12000,
      cash: 10,
      quantity: 1,
      expiryDate: "2026/1/1",
    },
    {
      id: "2",
      title: "臻白焕彩维生素CECE复合修护精华液4ml*5",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-HjIYhDHQTN9JdrwmhWXmwGXsJ6LRMK.png",
      points: 12000,
      cash: 10,
      quantity: 1,
      expiryDate: "2026/1/1",
    },
  ]

  // 计算总金额和积分
  const totalCash = orderItems.reduce((sum, item) => sum + item.cash * item.quantity, 0)
  const totalPoints = orderItems.reduce((sum, item) => sum + item.points * item.quantity, 0)

  // 格式化积分数字，添加千位分隔符
  const formatPoints = (points: number): string => {
    return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // 支付方式选择
  const [paymentMethod, setPaymentMethod] = useState("wechat")

  return (
    <div className="max-w-[375px] mx-auto bg-white min-h-screen flex flex-col">
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
      <header className="px-5 py-4 flex items-center justify-between border-b border-gray-200">
        <Link href="/shopping-cart" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">确认订单</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2">
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="black" />
            </svg>
          </button>
        </div>
      </header>

      {/* Order Items */}
      <div className="divide-y divide-gray-100">
        {orderItems.map((item) => (
          <div key={item.id} className="flex items-center py-4 px-5">
            {/* 商品图片 */}
            <div className="w-[100px] h-[100px] bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain max-h-[80px]"
              />
            </div>

            {/* 商品信息 */}
            <div className="flex-1 ml-3 min-w-0">
              {/* 商品标题 */}
              <h3 className="text-sm text-[#212121] line-clamp-2 leading-tight">
                【有限期至{item.expiryDate}】{item.title}
              </h3>

              {/* 积分和价格 */}
              <div className="mt-2 flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#fa5151] mr-1"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M12 6V18M6 12H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#fa5151] font-medium">{formatPoints(item.points)}</span>

                {item.cash > 0 && (
                  <>
                    <span className="text-[#fa5151] mx-1">+</span>
                    <span className="text-[#fa5151] font-medium">¥ {item.cash}</span>
                  </>
                )}
              </div>
            </div>

            {/* 数量 */}
            <div className="text-gray-400 ml-2">×{item.quantity}</div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-2">
        {/* 商品金额 */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
          <span className="text-gray-700">商品金额</span>
          <span className="font-medium">¥{totalCash}</span>
        </div>

        {/* 抵扣积分 */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
          <span className="text-gray-700">抵扣积分</span>
          <span className="font-medium">{formatPoints(totalPoints)}</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-2">
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
          <span className="text-gray-700">支付方式</span>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-[#07c160] rounded-full flex items-center justify-center mr-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12L10 17L19 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>微信支付</span>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Notice */}
      <div className="bg-[#fff9ec] px-5 py-3 text-sm text-[#ff9500]">
        本次兑换需要{formatPoints(totalPoints)}积分，一经兑换不予退回
      </div>

      {/* Footer - Checkout Bar */}
      <div className="border-t border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center text-[#fa5151]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 6V18M6 12H18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-medium">{formatPoints(totalPoints)}</span>
          <span className="mx-1">+</span>
          <span className="text-xl font-medium">¥ {totalCash}</span>
        </div>
        <button className="bg-[#14448b] text-white px-8 py-3 rounded-full">立即支付</button>
      </div>
    </div>
  )
}
