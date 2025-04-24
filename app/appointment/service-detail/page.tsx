"use client"

import { ChevronLeft, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

export default function ServiceDetailPage() {
  const searchParams = useSearchParams()
  const storeId = searchParams.get("storeId") || "1"
  const serviceId = searchParams.get("serviceId") || "1"

  // 服务效果数据
  const effectiveData = [
    { percentage: "92%", description: "肤色更均匀" },
    { percentage: "86%", description: "黄气改善" },
    { percentage: "84%", description: "皮肤更细腻" },
    { percentage: "81%", description: "痘印淡化" },
  ]

  // 服务详情数据
  const serviceDetail = {
    id: serviceId,
    name: "美白淡痘印",
    duration: "30分钟",
    price: 305,
    description: "通过专业的美白技术和成分，有效改善肤色不均、淡化痘印，让肌肤更加白皙透亮。",
    tag: "真人试用 实力见证",
  }

  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-white overflow-auto relative flex flex-col">
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

      {/* Header */}
      <header className="px-5 py-4 flex items-center justify-between absolute top-10 left-0 right-0 z-10">
        <Link href={`/appointment/select-service?storeId=${storeId}`} className="p-1">
          <ChevronLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-white/70 rounded-full">
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white/70 rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="black" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Hero Image */}
        <div className="relative w-full h-screen">
          <Image
            src="/placeholder.svg?height=812&width=375"
            alt={serviceDetail.name}
            fill
            className="object-cover"
            priority
          />

          {/* Service Title Overlay */}
          <div className="absolute top-[120px] left-0 right-0 text-center">
            <h1 className="text-4xl font-bold text-[#4a6741]">{serviceDetail.name}</h1>
            <div className="mt-4 inline-block bg-[#4a6741] text-white px-4 py-1 rounded-full text-sm">
              {serviceDetail.tag}
            </div>
          </div>

          {/* Effectiveness Data */}
          <div className="absolute bottom-[100px] left-0 right-0 flex justify-center space-x-4 px-4">
            {effectiveData.map((data, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#4a6741] font-bold text-lg">{data.percentage}</div>
                    <div className="text-[#4a6741] text-[10px]">{data.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-4 bg-white">
        <Link
          href={`/appointment/select-time?storeId=${storeId}&serviceId=${serviceId}`}
          className="w-full py-4 rounded-full text-center font-medium bg-[#14448b] text-white text-lg"
        >
          预约服务
        </Link>
      </div>
    </div>
  )
}
