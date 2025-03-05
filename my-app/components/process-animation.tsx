"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ProcessAnimation({ activeStep = 1 }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-[200px] w-full bg-muted rounded-lg"></div>

  const steps = [
    { label: "Material Selection", icon: "🧪" },
    { label: "Mixing & Compounding", icon: "🔄" },
    { label: "Molding & Shaping", icon: "🔨" },
    { label: "Curing & Vulcanization", icon: "🔥" },
    { label: "Finishing & QC", icon: "✅" },
  ]

  return (
    <div className="relative h-[200px] w-full rounded-lg bg-muted p-8">
      <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-background"></div>

      <div className="relative flex h-full items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index + 1 === activeStep
          const isCompleted = index + 1 < activeStep

          return (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-xl ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : isCompleted
                      ? "bg-primary/80 text-primary-foreground"
                      : "bg-background text-muted-foreground"
                }`}
                initial={false}
                animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {step.icon}

                {isActive && (
                  <motion.div
                    className="absolute -inset-1 rounded-full border-2 border-primary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />
                )}
              </motion.div>

              <motion.p
                className={`mt-2 text-center text-xs font-medium ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
                initial={false}
                animate={isActive ? { opacity: 1 } : { opacity: 0.7 }}
              >
                {step.label}
              </motion.p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

