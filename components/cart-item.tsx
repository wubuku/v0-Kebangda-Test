"use client"

import { useState } from "react"
import Image from "next/image"

export interface CartItemProps {
  id: string
  title: string
  imageUrl: string
  points: number
  cash?: number // 可选的现金金额
  quantity: number
  expiryDate?: string // 可选的有效期
  selected?: boolean // 是否被选中
  onSelect?: (id: string, selected: boolean) => void
  onQuantityChange?: (id: string, quantity: number) => void
  className?: string
}

export default function CartItem({
  id,
  title,
  imageUrl,
  points,
  cash = 0,
  quantity = 1,
  expiryDate,
  selected = false,
  onSelect,
  onQuantityChange,
  className = "",
}: CartItemProps) {
  const [isSelected, setIsSelected] = useState(selected)

  // 格式化积分数字，添加千位分隔符
  const formatPoints = (points: number): string => {
    return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // 处理标题，如果有有效期则添加前缀
  const displayTitle = expiryDate ? `【有限期至${expiryDate}】${title}` : title

  // 处理选择状态变化
  const handleSelectChange = () => {
    const newSelectedState = !isSelected
    setIsSelected(newSelectedState)
    if (onSelect) {
      onSelect(id, newSelectedState)
    }
  }

  return (
    <div className={`flex items-center py-4 ${className}`}>
      {/* 选择框 */}
      <button
        className={`w-6 h-6 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center ${
          isSelected ? "bg-[#14448b] border-[#14448b]" : "border-gray-300"
        }`}
        onClick={handleSelectChange}
        aria-label={isSelected ? "取消选择商品" : "选择商品"}
      >
        {isSelected && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* 商品图片 */}
      <div className="w-[80px] h-[80px] bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={60}
          height={60}
          className="object-contain max-h-[60px]"
        />
      </div>

      {/* 商品信息 */}
      <div className="flex-1 ml-3 min-w-0">
        {/* 商品标题 */}
        <h3 className="text-sm text-[#212121] line-clamp-2 leading-tight">{displayTitle}</h3>

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
          <span className="text-[#fa5151] font-medium">{formatPoints(points)}</span>

          {cash > 0 && (
            <>
              <span className="text-[#fa5151] mx-1">+</span>
              <span className="text-[#fa5151] font-medium">¥ {cash}</span>
            </>
          )}
        </div>
      </div>

      {/* 数量 */}
      <div className="text-gray-400 ml-2">×{quantity}</div>
    </div>
  )
}
