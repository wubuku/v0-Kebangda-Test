"use client"

import { useState } from "react"
import { ChevronLeft, MoreHorizontal, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface CartItem {
  id: string
  title: string
  imageUrl: string
  points: number
  cash: number
  quantity: number
  expiryDate: string
  selected: boolean
  soldOut?: boolean
  showDelete?: boolean
}

export default function ShoppingCartPage() {
  // 示例购物车数据
  const initialCartItems: CartItem[] = [
    {
      id: "1",
      title: "臻白焕彩维生素CECE复合修护精华液4ml*5",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-HjIYhDHQTN9JdrwmhWXmwGXsJ6LRMK.png",
      points: 12000,
      cash: 10,
      quantity: 1,
      expiryDate: "2026/1/1",
      selected: false,
    },
    {
      id: "2",
      title: "臻白焕彩维生素CECE复合修护精华液4ml*5",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-HjIYhDHQTN9JdrwmhWXmwGXsJ6LRMK.png",
      points: 12000,
      cash: 10,
      quantity: 1,
      expiryDate: "2026/1/1",
      selected: true,
    },
    {
      id: "3",
      title: "臻白焕彩维生素CECE复合修护精华液4ml*5",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-HjIYhDHQTN9JdrwmhWXmwGXsJ6LRMK.png",
      points: 12000,
      cash: 10,
      quantity: 1,
      expiryDate: "2026/1/1",
      selected: false,
      soldOut: true,
    },
    {
      id: "4",
      title: "臻白焕彩维生素CECE复合修护精华液4ml*5",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-HjIYhDHQTN9JdrwmhWXmwGXsJ6LRMK.png",
      points: 12000,
      cash: 10,
      quantity: 1,
      expiryDate: "2026/1/1",
      selected: false,
      showDelete: true,
    },
    {
      id: "5",
      title: "臻白焕彩维生素CECE复合修护精华液4ml*5",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-HjIYhDHQTN9JdrwmhWXmwGXsJ6LRMK.png",
      points: 12000,
      cash: 10,
      quantity: 1,
      expiryDate: "2026/1/1",
      selected: true,
    },
  ]

  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
  const [allSelected, setAllSelected] = useState(false)

  // 处理商品选择状态变化
  const handleItemSelect = (itemId: string) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId && !item.soldOut ? { ...item, selected: !item.selected } : item,
    )
    setCartItems(updatedItems)
    updateAllSelectedState(updatedItems)
  }

  // 更新全选状态
  const updateAllSelectedState = (items: CartItem[]) => {
    const availableItems = items.filter((item) => !item.soldOut)
    const allItemsSelected = availableItems.length > 0 && availableItems.every((item) => item.selected)
    setAllSelected(allItemsSelected)
  }

  // 处理全选/取消全选
  const handleSelectAll = () => {
    const newSelectedState = !allSelected
    const updatedItems = cartItems.map((item) => (item.soldOut ? item : { ...item, selected: newSelectedState }))
    setCartItems(updatedItems)
    setAllSelected(newSelectedState)
  }

  // 处理删除商品
  const handleDeleteItem = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))
  }

  // 清空购物车
  const handleClearCart = () => {
    setCartItems([])
    setAllSelected(false)
  }

  // 计算选中商品的总积分和总现金
  const calculateTotal = () => {
    return cartItems
      .filter((item) => item.selected && !item.soldOut)
      .reduce(
        (total, item) => {
          return {
            points: total.points + item.points * item.quantity,
            cash: total.cash + item.cash * item.quantity,
          }
        },
        { points: 0, cash: 0 },
      )
  }

  const { points: totalPoints, cash: totalCash } = calculateTotal()

  // 格式化积分数字，添加千位分隔符
  const formatPoints = (points: number): string => {
    return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
      <header className="px-5 py-4 flex items-center justify-between border-b border-gray-200">
        <Link href="/points-redemption" className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1">购物车</h1>
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

      {/* Cart Summary */}
      <div className="px-5 py-3 flex justify-between items-center border-b border-gray-100">
        <div className="text-gray-600">共{cartItems.length}件商品</div>
        <button className="flex items-center text-gray-400" onClick={handleClearCart}>
          <Trash2 className="w-4 h-4 mr-1" />
          <span>清空购物车</span>
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-auto">
        {cartItems.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <div key={item.id} className="relative">
                <div className="flex items-center py-4 px-5">
                  {/* 选择框 */}
                  <button
                    className={`w-6 h-6 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center ${
                      item.selected ? "bg-[#14448b] border-[#14448b]" : "border-gray-300"
                    } ${item.soldOut ? "opacity-50" : ""}`}
                    onClick={() => handleItemSelect(item.id)}
                    disabled={item.soldOut}
                    aria-label={item.selected ? "取消选择商品" : "选择商品"}
                  >
                    {item.selected && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12L10 17L19 8"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>

                  {/* 商品图片 */}
                  <div className="relative w-[80px] h-[80px] bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="object-contain max-h-[60px]"
                    />
                    {item.soldOut && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">已兑完</span>
                      </div>
                    )}
                  </div>

                  {/* 商品信息 */}
                  <div className="flex-1 ml-3 min-w-0">
                    {/* 商品标题 */}
                    <h3 className="text-sm text-[#212121] line-clamp-2 leading-tight">
                      【有限期至{item.expiryDate}】{item.title}
                    </h3>

                    {/* 积分和价格 */}
                    <div className="mt-2 flex items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#fa5151] mr-1"
                      >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path
                          d="M12 6V18M6 12H18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[#fa5151] font-medium">{formatPoints(item.points)}</span>

                      {item.cash > 0 && (
                        <>
                          <span className="text-[#fa5151] mx-1">+</span>
                          <span className="text-[#fa5151] font-medium">¥ {item.cash}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* 数量 */}
                  <div className="text-gray-400 ml-2">×{item.quantity}</div>
                </div>

                {/* 删除按钮 - 条件渲染 */}
                {item.showDelete && (
                  <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-[#fa5151] flex items-center justify-center">
                    <button className="text-white font-medium w-full h-full" onClick={() => handleDeleteItem(item.id)}>
                      删除
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-10">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
              >
                <path
                  d="M3 6H5H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-gray-500">购物车是空的</p>
            <Link href="/points-redemption" className="mt-4 text-[#14448b]">
              去选购商品
            </Link>
          </div>
        )}
      </div>

      {/* Footer - Checkout Bar */}
      {cartItems.length > 0 && (
        <div className="border-t border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className={`w-6 h-6 rounded-full border flex-shrink-0 mr-2 flex items-center justify-center ${
                allSelected ? "bg-[#14448b] border-[#14448b]" : "border-gray-300"
              }`}
              onClick={handleSelectAll}
              aria-label={allSelected ? "取消全选" : "全选"}
            >
              {allSelected && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12L10 17L19 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <span className="text-sm">全选</span>
          </div>

          <div className="flex items-center">
            <div className="mr-4">
              <span className="text-sm text-gray-500">合计:</span>{" "}
              <span className="text-[#fa5151]">
                ¥{totalCash}+{formatPoints(totalPoints)}积分
              </span>
            </div>
            <button className="bg-[#14448b] text-white px-6 py-3 rounded-full">立即支付</button>
          </div>
        </div>
      )}
    </div>
  )
}
