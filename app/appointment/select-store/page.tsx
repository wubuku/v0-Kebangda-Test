"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, Search, MoreHorizontal, Target } from "lucide-react"
import Link from "next/link"

export default function SelectStorePage() {
  const [activeTab, setActiveTab] = useState("retail")
  const [selectedStore, setSelectedStore] = useState<string | null>(null)

  const stores = [
    {
      id: "1",
      name: "常州泰富",
      type: "线下零售精品店",
      distance: "距您5.19Km",
      phone: "0519-73756811",
      address: "江苏省常州市钟楼区延陵西路95-97号泰富百货一楼科邦达柜台",
    },
    {
      id: "2",
      name: "常州泰富",
      type: "线下零售精品店",
      distance: "距您5.19Km",
      phone: "0519-73756811",
      address: "江苏省常州市钟楼区延陵西路95-97号泰富百货一楼科邦达柜台",
    },
    {
      id: "3",
      name: "常州泰富",
      type: "线下零售精品店",
      distance: "距您5.19Km",
      phone: "0519-73756811",
      address: "江苏省常州市钟楼区延陵西路95-97号泰富百货一楼科邦达柜台",
    },
  ]

  const handleStoreSelect = (storeId: string) => {
    setSelectedStore(storeId)
    // 在实际应用中，这里可能会导航到下一步
    console.log(`选择了门店: ${storeId}`)
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
      <header className="px-5 py-4 flex items-center justify-between border-b border-gray-100">
        <Link href="/home" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">服务预约</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-gray-50 rounded-full">
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button className="p-2 bg-gray-50 rounded-full">
            <Target className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-5 py-2 flex items-center space-x-3">
        <button className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <span className="text-gray-800">常州市</span>
          <ChevronDown className="w-4 h-4 ml-1 text-gray-600" />
        </button>
        <div className="flex-1 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="请输入门店名称"
            className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-full text-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        <button
          className={`flex-1 py-3 text-center ${
            activeTab === "retail" ? "text-blue-600 font-medium border-b-2 border-blue-600" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("retail")}
        >
          线下零售精品店
        </button>
        <button
          className={`flex-1 py-3 text-center ${
            activeTab === "partner" ? "text-blue-600 font-medium border-b-2 border-blue-600" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("partner")}
        >
          官方合作机构
        </button>
      </div>

      {/* Store List */}
      <div className="flex-1 bg-gray-50 p-4 space-y-4">
        {stores.map((store) => (
          <div
            key={store.id}
            className={`${selectedStore === store.id ? "border-2 border-blue-500" : ""} rounded-lg overflow-hidden`}
            onClick={() => handleStoreSelect(store.id)}
          >
            <StoreAppointmentCard
              name={store.name}
              type={store.type}
              distance={store.distance}
              phone={store.phone}
              address={store.address}
              isSelected={selectedStore === store.id}
            />
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <Link
          href={selectedStore ? `/appointment/select-service?storeId=${selectedStore}` : "#"}
          className={`w-full py-3 rounded-lg text-center font-medium ${
            selectedStore ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          onClick={(e) => !selectedStore && e.preventDefault()}
        >
          下一步
        </Link>
      </div>
    </div>
  )
}

// 简化版的门店卡片，专为预约流程设计
function StoreAppointmentCard({
  name,
  type,
  distance,
  phone,
  address,
  isSelected,
}: {
  name: string
  type: string
  distance: string
  phone: string
  address: string
  isSelected?: boolean
}) {
  return (
    <div className={`bg-white p-4 ${isSelected ? "bg-blue-50" : ""}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded inline-block mt-1">{type}</div>
          <div className="text-sm text-gray-600 mt-2">{distance}</div>
        </div>
        {isSelected && (
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex">
          <span className="text-gray-500 w-20">联系电话:</span>
          <a href={`tel:${phone}`} className="text-blue-600">
            {phone}
          </a>
        </div>
        <div className="flex items-start">
          <span className="text-gray-500 w-20 flex-shrink-0">门店地址:</span>
          <span className="text-gray-800">{address}</span>
        </div>
      </div>
    </div>
  )
}
