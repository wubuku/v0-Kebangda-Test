"use client"

import type { ReactNode } from "react"

export interface BenefitItem {
  id: string
  title: string
  description: string
  icon: ReactNode
  onClick?: () => void
}

export interface MembershipBenefitsProps {
  benefits: BenefitItem[]
  className?: string
}

export default function MembershipBenefits({ benefits, className = "" }: MembershipBenefitsProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {benefits.map((benefit) => (
        <button
          key={benefit.id}
          className="flex items-start space-x-3 text-left"
          onClick={benefit.onClick}
          aria-label={benefit.title}
        >
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
            {benefit.icon}
          </div>
          <div>
            <h3 className="font-medium text-base">{benefit.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{benefit.description}</p>
          </div>
        </button>
      ))}
    </div>
  )
}
