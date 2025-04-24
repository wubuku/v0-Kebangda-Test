"use client"

import { ChevronLeft, MoreHorizontal, Settings } from "lucide-react"
import BottomNavigationBar from "@/components/bottom-navigation-bar"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="max-w-[375px] mx-auto h-[812px] bg-white overflow-auto relative flex flex-col">
      {/* Header */}
      <header className="h-[88px] flex items-center px-6 border-b border-gray-100 sticky top-0 bg-white z-10">
        <Link href="/" className="p-2">
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </Link>
        <h1 className="flex-1 text-center font-medium">个人中心</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-gray-100 rounded-full">
            <MoreHorizontal className="w-4 h-4" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
            <img src="/placeholder.svg?height=64&width=64" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">用户名</h2>
            <p className="text-sm text-gray-500">ID: 123456789</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-medium mb-3">我的订单</h3>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 11V6H15V11M9 11H15M9 11H3V20H21V11H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 6V4H14V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs">待付款</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M12 5V19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs">待发货</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 12H2M16 6L22 12L16 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs">待收货</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs">已完成</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 14C19 16.7614 16.7614 19 14 19H10C7.23858 19 5 16.7614 5 14V10C5 7.23858 7.23858 5 10 5H14C16.7614 5 19 7.23858 19 10V14Z"
                    stroke="#14448b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>我的收藏</span>
            </div>
            <ChevronLeft className="w-5 h-5 transform rotate-180 text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#14448b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="#14448b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>浏览历史</span>
            </div>
            <ChevronLeft className="w-5 h-5 transform rotate-180 text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 6H5H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                    stroke="#14448b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>地址管理</span>
            </div>
            <ChevronLeft className="w-5 h-5 transform rotate-180 text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#14448b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22Z"
                    stroke="#14448b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>设置</span>
            </div>
            <ChevronLeft className="w-5 h-5 transform rotate-180 text-gray-400" />
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigationBar />
    </div>
  )
}
