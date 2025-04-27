"use client"

import { ChevronLeft, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface ConsultantDetailPageProps {
  params: {
    id: string
  }
}

export default function ConsultantDetailPage({ params }: ConsultantDetailPageProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  // 在实际应用中，这里应该根据ID从API获取顾问数据
  // 这里使用模拟数据作为示例
  const consultantData = {
    id: params.id,
    name: "周泽宇",
    position: "柜长",
    store: "常州泰富",
    photoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/confident-beauty-professional-MbUpher9upJrQy3CmSWQhF27EDqnVZ.png",
    qrCodeUrl: "/qr-code-example.png",
  }

  return (
    <div className="max-w-[375px] mx-auto min-h-screen bg-[#f3f5f9] flex flex-col">
      {/* Status Bar */}
      <div className="h-10 px-5 flex items-center justify-between bg-transparent">
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
      <header className="px-5 py-4 flex items-center justify-between">
        <Link href="/store-consultants" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">美容顾问</h1>
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

      {/* Consultant Card */}
      <div className="flex-1 flex items-center justify-center px-5 pb-20 pt-10">
        <div className="w-full bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center">
          {/* 顾问头像 */}
          <div className="w-28 h-28 rounded-full overflow-hidden mb-6 relative border-2 border-white shadow-md">
            <Image
              src={consultantData.photoUrl || "/placeholder.svg"}
              alt={consultantData.name}
              fill
              className={`object-cover transition-opacity duration-300 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoadingComplete={() => setIsImageLoaded(true)}
              priority
            />
            {!isImageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full"></div>}
          </div>

          {/* 顾问姓名 */}
          <h2 className="text-2xl font-medium text-[#212121] mb-2">{consultantData.name}</h2>

          {/* 顾问职位 */}
          <p className="text-base text-gray-600 mb-8">{`${consultantData.store}-${consultantData.position}`}</p>

          {/* 二维码 */}
          <div className="w-64 h-64 relative mb-4">
            <Image
              src={consultantData.qrCodeUrl || "/placeholder.svg"}
              alt={`${consultantData.name}的二维码`}
              fill
              className="object-contain"
            />
          </div>

          {/* 提示文字 */}
          <p className="text-sm text-gray-400">长按识别二维码，添加您的专属美容顾问</p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="px-5 pb-8">
        <button className="w-full py-4 bg-[#14448b] text-white rounded-full font-medium">选择其他美容顾问</button>
      </div>

      {/* Home Indicator */}
      <div className="h-8 flex items-center justify-center">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )
}
