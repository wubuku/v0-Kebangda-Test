"use client"

import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import MembershipSummary from "@/components/membership-summary"
import CustomBottomNavigationBar from "@/components/custom-bottom-navigation"

export default function MembershipProfilePage() {
  const handleQrCodeClick = () => {
    console.log("显示会员二维码")
    // 实现显示二维码的逻辑
  }

  // 自定义会员徽章
  const customBadge = (
    <div className="w-14 h-14">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M28 4L35 20L52 23L40 35L43 52L28 44L13 52L16 35L4 23L21 20L28 4Z"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="2"
        />
        <text x="28" y="32" textAnchor="middle" fill="#FFA500" fontSize="16" fontWeight="bold">
          金
        </text>
      </svg>
    </div>
  )

  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-gray-50 overflow-auto relative flex flex-col">
      {/* Header */}
      <header className="h-[88px] flex items-center px-6 border-b border-gray-100 sticky top-0 bg-white z-10">
        <Link href="/home" className="p-2">
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </Link>
        <h1 className="flex-1 text-center font-medium">会员资料</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <MembershipSummary
          avatar="/placeholder.svg?height=56&width=56"
          username="Stella_星语手礼"
          membershipLevel="金卡会员"
          expiryDate="2027.03.20"
          validPoints={32000}
          expiringPoints={1600}
          coupons={12}
          badgeIcon={customBadge}
          onQrCodeClick={handleQrCodeClick}
        />

        <div className="mt-8 bg-white rounded-lg p-5 space-y-4">
          <h2 className="text-lg font-semibold">会员详细信息</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">会员ID</span>
              <span>123456789</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">注册时间</span>
              <span>2022-03-20</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">会员等级</span>
              <span className="text-yellow-600 font-medium">金卡会员</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">下一等级</span>
              <span>白金会员 (需5,000积分)</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="mt-auto">
        <CustomBottomNavigationBar />
      </div>
    </div>
  )
}
