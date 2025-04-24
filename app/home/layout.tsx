import type React from "react"
import CustomBottomNavigationBar from "@/components/custom-bottom-navigation"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="fixed bottom-0 left-0 right-0 max-w-[375px] mx-auto">
        <CustomBottomNavigationBar />
      </div>
    </div>
  )
}
