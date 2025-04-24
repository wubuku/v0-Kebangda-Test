"use client"

import { useState } from "react"
import { ChevronLeft, MoreHorizontal, Phone, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"

export default function SelectServicePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const storeId = searchParams.get("storeId") || "1"
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      id: "1",
      name: "美白护理",
      duration: "30分钟",
      price: 305,
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "2",
      name: "美白护理",
      duration: "105分钟",
      price: 650,
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "3",
      name: "面部护理",
      duration: "45分钟",
      price: 910,
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "4",
      name: "痘痘护理",
      duration: "105分钟",
      price: 850,
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "5",
      name: "面部护理",
      duration: "45分钟",
      price: 910,
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "6",
      name: "痘痘护理",
      duration: "105分钟",
      price: 850,
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "7",
      name: "面部护理",
      duration: "45分钟",
      price: 910,
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "8",
      name: "痘痘护理",
      duration: "105分钟",
      price: 850,
      image: "/placeholder.svg?height=180&width=180",
    },
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    // 导航到服务详情页面
    router.push(`/appointment/service-detail?storeId=${storeId}&serviceId=${serviceId}`)
  }

  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-white overflow-auto relative flex flex-col">
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
        <Link href={`/appointment/select-store`} className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-white rounded-full">
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="black" />
            </svg>
          </button>
        </div>
      </header>

      {/* Store Banner */}
      <div className="w-full h-[180px] relative">
        <Image src="/placeholder.svg?height=180&width=375" alt="Store Interior" fill className="object-cover" />
      </div>

      {/* Store Info */}
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center">
              <h2 className="text-lg font-bold">常州泰富</h2>
              <span className="ml-2 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">线下零售精品店</span>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-sm text-green-600 font-medium">营业中</span>
              <span className="text-sm text-gray-500 ml-2">09:00-22:00</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <Link href="#" className="text-sm text-gray-700 flex items-center">
                  江苏省常州市钟楼区延陵西路95-97号泰富百货
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-1">距您5.19Km</div>
          </div>
          <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Service List */}
      <div className="flex-1 bg-white p-4">
        <h3 className="text-lg font-bold mb-4">服务项目</h3>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`border rounded-lg overflow-hidden ${
                selectedService === service.id ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => handleServiceSelect(service.id)}
            >
              <div className="relative h-[120px]">
                <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-medium">
                  {service.name}({service.duration})
                </h4>
                <p className="text-red-500 font-medium mt-1">¥ {service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
