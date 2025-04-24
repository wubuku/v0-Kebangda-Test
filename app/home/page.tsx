"use client"

import MembershipSummary from "@/components/membership-summary"
import MembershipBenefits from "@/components/membership-benefits"
import {
  ServiceAppointmentIcon,
  SkinTestingIcon,
  PointsExchangeIcon,
  SkinMeasurementIcon,
} from "@/components/benefit-icons"
import type { BenefitItem } from "@/components/membership-benefits"

export default function HomePage() {
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

  const handleQrCodeClick = () => {
    console.log("二维码被点击")
    // 这里可以实现显示二维码的逻辑
  }

  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-gray-50 overflow-auto relative flex flex-col">
      {/* Status Bar */}
      <div className="h-10 px-5 flex items-center justify-between bg-transparent absolute top-0 left-0 right-0 z-10">
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

      {/* Header Image */}
      <div className="relative h-[280px] w-full">
        <img
          src="/placeholder.svg?height=280&width=375"
          alt="KOBONDA Skincare"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 p-4 flex space-x-2">
          <button className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="1.5" fill="black" />
              <circle cx="6" cy="12" r="1.5" fill="black" />
              <circle cx="18" cy="12" r="1.5" fill="black" />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="black" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-1 text-black">科邦达</h1>
            <p className="text-xl tracking-wider text-black">KOBONDA</p>
          </div>
        </div>
      </div>

      {/* User Profile Card */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 flex-1">
        <div className="p-5">
          {/* Membership Summary */}
          <MembershipSummary
            avatar="/placeholder.svg?height=56&width=56"
            username="Stella_星语手礼"
            membershipLevel="金卡会员"
            expiryDate="2027.03.20"
            validPoints={32000}
            expiringPoints={1600}
            coupons={12}
            onQrCodeClick={handleQrCodeClick}
          />

          {/* Benefits Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">臻享4项权益</h3>
              <button className="text-sm text-gray-400">(畅享多种权益)</button>
            </div>
            <MembershipBenefits benefits={benefits} />
          </div>
        </div>
      </div>
    </div>
  )
}
