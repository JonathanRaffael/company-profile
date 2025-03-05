"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <div className="relative h-[400px] w-full max-w-[500px]">
        <img
          src="/images/Picture2.jpeg"
          alt="Silicone rubber product"
          className="scale-125 rounded-lg object-cover mt-20"
/>
      </div>
    )

  return (
    <div className="relative h-[400px] w-full max-w-[500px]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <img
          src="/images/Picture2.jpeg"
          alt="Silicone rubber product"
          className="scale-125 rounded-lg object-cover mt-20"
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -right-4 rounded-lg bg-primary p-4 text-primary-foreground"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-lg font-bold">Premium Quality</p>
        <p className="text-sm">ISO 9001 Certified</p>
      </motion.div>

      <motion.div
        className="absolute -top-4 -left-4 rounded-lg bg-background p-4 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-lg font-bold">Custom Solutions</p>
        <p className="text-sm text-muted-foreground">For Every Industry</p>
      </motion.div>
    </div>
  )
}

