"use client"

import PointsRedemptionCard from "@/components/points-redemption-card"

export default function PointsRedemptionPage() {
  // 示例商品数据
  const products = [
    {
      id: "1",
      title: "臻白焕彩维生素CECE复合精华",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_E7_A7_91_E9_82_A6_E8_BE_BE__Copy_-HjIYhDHQTN9JdrwmhWXmwGXsJ6LRMK.png",
      points: 12000,
      cash: 10,
      expiryDate: "2026/1/1",
    },
    {
      id: "2",
      title: "多效修护精华液",
      imageUrl: "/minimalist-serum.png",
      points: 8000,
      cash: 0,
      expiryDate: "2025/12/31",
    },
    {
      id: "3",
      title: "高保湿面膜套装",
      imageUrl: "/assorted-face-mask-packaging.png",
      points: 5000,
      cash: 5,
      expiryDate: "2025/10/15",
    },
    {
      id: "4",
      title: "抗氧化眼霜",
      imageUrl: "/elegant-eye-cream.png",
      points: 6500,
      cash: 0,
      expiryDate: "2025/11/30",
    },
  ]

  const handleProductClick = (productId: string) => {
    console.log(`商品 ${productId} 被点击`)
    // 这里可以添加导航到商品详情页的逻辑
  }

  return (
    <div className="max-w-[375px] mx-auto bg-gray-100 min-h-screen p-4">
      <h1 className="text-xl font-bold mb-4">积分兑换</h1>

      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <PointsRedemptionCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            points={product.points}
            cash={product.cash}
            expiryDate={product.expiryDate}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  )
}
