"use client"

import { Headphones, User } from "lucide-react"

export interface StoreCardProps {
  name: string
  type: string
  distance: string
  phone: string
  address: string
  className?: string
  onCustomerServiceClick?: () => void
  onConsultantClick?: () => void
}

export default function StoreCard({
  name,
  type,
  distance,
  phone,
  address,
  className = "",
  onCustomerServiceClick,
  onConsultantClick,
}: StoreCardProps) {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded inline-block mt-1">{type}</div>
          <div className="text-sm text-gray-600 mt-2">{distance}</div>
        </div>
        <div className="flex space-x-3">
          <button className="flex flex-col items-center" onClick={onCustomerServiceClick} aria-label="联系客服">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
              <Headphones className="w-5 h-5 text-gray-700" />
            </div>
            <span className="text-xs mt-1">客服</span>
          </button>
          <button className="flex flex-col items-center" onClick={onConsultantClick} aria-label="联系顾问">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-700" />
            </div>
            <span className="text-xs mt-1">顾问</span>
          </button>
        </div>
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
