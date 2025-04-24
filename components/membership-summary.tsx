"use client"

import type React from "react"

import { QrCode } from "lucide-react"
import Image from "next/image"

export interface MembershipSummaryProps {
  avatar: string
  username: string
  membershipLevel: string
  expiryDate: string
  validPoints: number
  expiringPoints: number
  coupons: number
  badgeIcon?: React.ReactNode
  onQrCodeClick?: () => void
  className?: string
}

export default function MembershipSummary({
  avatar,
  username,
  membershipLevel,
  expiryDate,
  validPoints,
  expiringPoints,
  coupons,
  badgeIcon,
  onQrCodeClick,
  className = "",
}: MembershipSummaryProps) {
  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className={`bg-white rounded-lg p-5 ${className}`}>
      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden mr-3 relative">
            {avatar ? (
              <Image src={avatar || "/placeholder.svg"} alt={username} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                {username.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-bold">{username}</h2>
            <p className="text-sm text-gray-400">
              {membershipLevel}至: {expiryDate}
            </p>
          </div>
        </div>
        {badgeIcon || (
          <div className="w-12 h-12">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 4L30 16L43 18L33.5 27L36 40L24 34L12 40L14.5 27L5 18L18 16L24 4Z"
                fill="#FFD700"
                stroke="#FFA500"
                strokeWidth="2"
              />
            </svg>
          </div>
        )}
      </div>

      {/* User Stats */}
      <div className="flex justify-between mt-6 text-center">
        <div className="flex-1">
          <p className="text-xl font-bold">{formatNumber(validPoints)}</p>
          <p className="text-xs text-gray-500 mt-1">有效积分</p>
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold">{formatNumber(expiringPoints)}</p>
          <p className="text-xs text-gray-500 mt-1">临期积分</p>
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold">{coupons}</p>
          <p className="text-xs text-gray-500 mt-1">我的卡券</p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <button onClick={onQrCodeClick} className="focus:outline-none" aria-label="显示会员二维码">
            <QrCode className="w-6 h-6" />
          </button>
          <p className="text-xs text-gray-500 mt-1">二维码</p>
        </div>
      </div>
    </div>
  )
}
