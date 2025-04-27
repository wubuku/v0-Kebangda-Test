"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"

export interface BeautyConsultantItemProps {
  id: string
  name: string
  position: string
  photoUrl: string
  onClick?: () => void
  className?: string
}

export default function BeautyConsultantItem({
  id,
  name,
  position,
  photoUrl,
  onClick,
  className = "",
}: BeautyConsultantItemProps) {
  return (
    <button
      className={`w-full flex items-center py-3 px-4 ${className}`}
      onClick={onClick}
      aria-label={`查看${name}的详细信息`}
    >
      {/* 顾问头像 */}
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={photoUrl || "/placeholder.svg?height=64&width=64&query=person"}
          alt={name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 顾问信息 */}
      <div className="ml-3 flex-1 text-left">
        <h3 className="text-lg font-medium text-[#212121]">{name}</h3>
        <p className="text-sm text-gray-400">{position}</p>
      </div>

      {/* 右侧箭头 */}
      <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
    </button>
  )
}
