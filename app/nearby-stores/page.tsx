"use client"

import { useState } from "react"
import { ChevronDown, Search, MoreHorizontal, Target } from "lucide-react"
import BottomNavigationBar from "@/components/bottom-navigation-bar"
import StoreCard from "@/components/store-card"

export default function NearbyStores() {
  const [activeTab, setActiveTab] = useState("retail")

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
  ]

  const handleCustomerServiceClick = (storeId: string) => {
    console.log(`联系 ${storeId} 的客服`)
    // 实现客服联系逻辑
  }

  const handleConsultantClick = (storeId: string) => {
    console.log(`联系 ${storeId} 的顾问`)
    // 实现顾问联系逻辑
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
        <h1 className="text-xl font-bold text-center flex-1">附近门店</h1>
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

      {/* Main Image */}
      <div className="w-full h-[200px] relative">
        <img src="/placeholder.svg?height=200&width=375" alt="Store Interior" className="w-full h-full object-cover" />
      </div>

      {/* Store List */}
      <div className="flex-1 bg-gray-100 p-4 space-y-4">
        {stores.map((store) => (
          <StoreCard
            key={store.id}
            name={store.name}
            type={store.type}
            distance={store.distance}
            phone={store.phone}
            address={store.address}
            onCustomerServiceClick={() => handleCustomerServiceClick(store.id)}
            onConsultantClick={() => handleConsultantClick(store.id)}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigationBar />
    </div>
  )
}
