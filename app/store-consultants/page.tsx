"use client"

import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BeautyConsultantItem from "@/components/beauty-consultant-item"

export default function StoreConsultantsPage() {
  // 门店信息
  const storeInfo = {
    name: "常州泰富",
    address: "江苏省常州市钟楼区延陵西路95-97号",
    counter: "泰富百货一楼科邦达柜台",
  }

  // 美容顾问数据
  const consultants = [
    {
      id: "1",
      name: "周泽宇",
      position: "柜长",
      photoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/confident-beauty-professional-MbUpher9upJrQy3CmSWQhF27EDqnVZ.png",
    },
    {
      id: "2",
      name: "王厚哲",
      position: "美容顾问",
      photoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/confident-male-beauty-consultant-OQYxyhYN7T2sN11nUtNEPrhwhsBjYl.png",
    },
    {
      id: "3",
      name: "郑西元",
      position: "美容顾问",
      photoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/confident-beauty-advisor-vDR1v4sOzHQBGgWupoAa19LfelZZd6.png",
    },
    {
      id: "4",
      name: "李彤运",
      position: "美容顾问",
      photoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/confident-beauty-consultant-jZjY4BT5k0PXUrFPFh5PETA8XiSntE.png",
    },
  ]

  const handleConsultantClick = (id: string) => {
    console.log(`查看顾问详情: ${id}`)
    // 这里可以添加导航到顾问详情页的逻辑
  }

  const handleSelectOtherCounter = () => {
    console.log("选择其他柜台")
    // 这里可以添加导航到选择其他柜台页面的逻辑
  }

  return (
    <div className="max-w-[375px] mx-auto bg-white min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="h-10 px-5 flex items-center justify-between bg-white">
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
        <Link href="/nearby-stores" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">美容顾问</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="6" r="2" fill="black" />
              <circle cx="12" cy="12" r="2" fill="black" />
              <circle cx="12" cy="18" r="2" fill="black" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="black" />
            </svg>
          </button>
        </div>
      </header>

      {/* Banner Image */}
      <div className="w-full h-[200px] relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-GW4VU0K7l155RdJlChWNVNniiKpuoy.png"
          alt="Beauty Treatment"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Store Information */}
      <div className="py-6 text-center">
        <h2 className="text-xl font-bold">{storeInfo.name}</h2>
        <p className="text-gray-600 mt-2 px-8">
          {storeInfo.address}
          <br />
          {storeInfo.counter}
        </p>
      </div>

      {/* Consultant List */}
      <div className="flex-1 divide-y divide-gray-100">
        {consultants.map((consultant) => (
          <BeautyConsultantItem
            key={consultant.id}
            id={consultant.id}
            name={consultant.name}
            position={consultant.position}
            photoUrl={consultant.photoUrl}
            onClick={() => handleConsultantClick(consultant.id)}
          />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="p-4 mt-auto">
        <button
          className="w-full py-4 bg-[#14448b] text-white rounded-full font-medium"
          onClick={handleSelectOtherCounter}
        >
          选择其他柜台
        </button>
      </div>

      {/* Home Indicator */}
      <div className="h-8 flex items-center justify-center">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )
}
