"use client"

import Image from "next/image"
import { useState } from "react"

export interface BeautyConsultantCardProps {
  name: string
  position: string
  store: string
  photoUrl: string
  qrCodeUrl: string
  className?: string
}

export default function BeautyConsultantCard({
  name,
  position,
  store,
  photoUrl,
  qrCodeUrl,
  className = "",
}: BeautyConsultantCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className={`flex flex-col items-center p-6 bg-white ${className}`}>
      {/* 顾问头像 */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative">
        <Image
          src={photoUrl || "/placeholder.svg"}
          alt={name}
          fill
          className={`object-cover transition-opacity duration-300 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setIsImageLoaded(true)}
          priority
        />
        {!isImageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full"></div>}
      </div>

      {/* 顾问姓名 */}
      <h2 className="text-2xl font-medium text-[#212121] mb-2">{name}</h2>

      {/* 顾问职位 */}
      <p className="text-base text-gray-600 mb-8">{`${store}-${position}`}</p>

      {/* 二维码 */}
      <div className="w-64 h-64 relative mb-4">
        <Image src={qrCodeUrl || "/placeholder.svg"} alt={`${name}的二维码`} fill className="object-contain" />
      </div>

      {/* 提示文字 */}
      <p className="text-sm text-gray-400">长按识别二维码，添加您的专属美容顾问</p>
    </div>
  )
}
