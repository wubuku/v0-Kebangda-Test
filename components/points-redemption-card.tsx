"use client"

import Image from "next/image"

export interface PointsRedemptionCardProps {
  id: string
  title: string
  imageUrl: string
  points: number
  cash?: number // 可选的现金金额
  expiryDate?: string // 可选的有效期
  onClick?: () => void
  className?: string
}

export default function PointsRedemptionCard({
  id,
  title,
  imageUrl,
  points,
  cash,
  expiryDate,
  onClick,
  className = "",
}: PointsRedemptionCardProps) {
  // 格式化积分数字，添加千位分隔符
  const formatPoints = (points: number): string => {
    return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // 处理标题，如果有有效期则添加前缀
  const displayTitle = expiryDate ? `【有限期至${expiryDate}】${title}` : title

  // 处理点击事件
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      className={`bg-gray-50 rounded-lg overflow-hidden shadow-sm ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {/* 商品图片 */}
      <div className="relative w-full aspect-square bg-white p-4 flex items-center justify-center">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={120}
          height={120}
          className="object-contain max-h-[120px]"
        />
      </div>

      {/* 商品信息 */}
      <div className="p-3">
        {/* 商品标题 */}
        <h3 className="text-sm text-[#212121] line-clamp-2 h-10 leading-tight">{displayTitle}</h3>

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

          {cash !== undefined && cash > 0 && (
            <>
              <span className="text-[#fa5151] mx-1">+</span>
              <span className="text-[#fa5151] font-medium">¥ {cash}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
