"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, MoreHorizontal, ChevronDown, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RegisterPage() {
  const [phone, setPhone] = useState("15613706263")
  const [name, setName] = useState("哪个哩个哪")
  const [gender, setGender] = useState("女")
  const [birthday, setBirthday] = useState("1990/04/06")
  const [region, setRegion] = useState("江苏省 南京市 高淳区")
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理表单提交
    console.log({ phone, name, gender, birthday, region, agreeTerms })
  }

  return (
    <div className="max-w-[375px] mx-auto min-h-screen bg-white flex flex-col">
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
        <Link href="/home" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">会员注册</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2">
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="black" />
            </svg>
          </button>
        </div>
      </header>

      {/* Logo */}
      <div className="flex justify-center my-8">
        <div className="relative w-64 h-32">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-PIIVQPqLo7ThpPIWB3o32nCON6QEVY.png"
            alt="KOBONDA Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="flex-1 px-6">
        {/* Phone Number */}
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <label className="text-gray-700 w-20">手机号</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 outline-none text-gray-900 mx-2"
            placeholder="请输入手机号"
          />
          <button type="button" className="text-[#14448b] text-sm whitespace-nowrap">
            一键授权
          </button>
        </div>

        {/* Name */}
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <label className="text-gray-700 w-20">姓名</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 outline-none text-gray-900"
            placeholder="请输入姓名"
          />
        </div>

        {/* Gender */}
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <label className="text-gray-700 w-20">性别</label>
          <div className="flex-1 text-gray-900">{gender}</div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>

        {/* Birthday */}
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <label className="text-gray-700 w-20">生日</label>
          <div className="flex-1 text-gray-900">{birthday}</div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>

        {/* Birthday Note */}
        <div className="text-xs text-gray-400 mt-2 mb-4">*会员生日提交后不可二次修改，以首次填写的生日信息为准</div>

        {/* Region */}
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <label className="text-gray-700 w-20">省市区</label>
          <div className="flex-1 text-gray-900">{region}</div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>

        {/* Terms Agreement */}
        <div className="flex items-center mt-6">
          <button
            type="button"
            className={`w-6 h-6 rounded-full border flex items-center justify-center mr-2 ${
              agreeTerms ? "bg-[#14448b] border-[#14448b]" : "border-gray-300"
            }`}
            onClick={() => setAgreeTerms(!agreeTerms)}
            aria-label={agreeTerms ? "取消同意条款" : "同意条款"}
          >
            {agreeTerms && <Check className="w-4 h-4 text-white" />}
          </button>
          <div className="text-sm">
            我已阅读并同意本
            <Link href="/terms" className="text-[#14448b]">
              《使用条款》
            </Link>
            和
            <Link href="/privacy" className="text-[#14448b]">
              《隐私政策》
            </Link>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!agreeTerms}
          className={`w-full py-4 rounded-full text-white text-center mt-8 ${
            agreeTerms ? "bg-[#14448b]" : "bg-gray-300"
          }`}
        >
          立即注册成为会员
        </button>
      </form>

      {/* Home Indicator */}
      <div className="h-8 flex items-center justify-center mt-auto">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )
}
