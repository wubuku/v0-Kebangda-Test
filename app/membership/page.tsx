"use client"

import BottomNavigationBar from "@/components/bottom-navigation-bar"
import MembershipBenefits from "@/components/membership-benefits"
import {
  ServiceAppointmentIcon,
  SkinTestingIcon,
  PointsExchangeIcon,
  SkinMeasurementIcon,
} from "@/components/benefit-icons"
import type { BenefitItem } from "@/components/membership-benefits"

export default function MembershipPage() {
  const benefits: BenefitItem[] = [
    {
      id: "service-appointment",
      title: "服务预约",
      description: "体验臻享SPA护理",
      icon: <ServiceAppointmentIcon />,
      onClick: () => console.log("服务预约被点击"),
    },
    {
      id: "skin-testing",
      title: "肌肤检测",
      description: "AI定制专属护肤方案",
      icon: <SkinTestingIcon />,
      onClick: () => console.log("肌肤检测被点击"),
    },
    {
      id: "points-exchange",
      title: "积分兑换",
      description: "专属定制积分兑好礼",
      icon: <PointsExchangeIcon />,
      onClick: () => console.log("积分兑换被点击"),
    },
    {
      id: "skin-measurement",
      title: "量肤配制系列",
      description: "个性化护肤解决方案",
      icon: <SkinMeasurementIcon />,
      onClick: () => console.log("量肤配制系列被点击"),
    },
  ]

  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-white overflow-auto relative flex flex-col">
      {/* Header */}
      <header className="h-[88px] flex items-center px-6 border-b border-gray-100 sticky top-0 bg-white z-10">
        <h1 className="flex-1 text-center font-medium text-xl">会员权益</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">我的权益</h2>
          <MembershipBenefits benefits={benefits} />
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">会员等级</h2>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-5 text-white">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">黄金会员</h3>
                <p className="text-sm opacity-80 mt-1">有效期至: 2024-12-31</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                    fill="white"
                  />
                  <path
                    d="M12 15V23M12 23H7M12 23H17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>当前积分</span>
                <span className="font-semibold">2,580</span>
              </div>
              <div className="flex justify-between">
                <span>下一等级</span>
                <span className="font-semibold">白金会员 (需5,000积分)</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigationBar />
    </div>
  )
}
