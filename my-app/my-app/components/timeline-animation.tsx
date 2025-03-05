"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const timelineEvents = [
  { year: 2005, title: "Pendirian", description: "Perusahaan didirikan sebagai workshop kecil" },
  { year: 2010, title: "Ekspansi", description: "Pembukaan pabrik pertama dengan teknologi modern" },
  { year: 2015, title: "Sertifikasi", description: "Mendapatkan sertifikasi ISO 9001 dan ISO 14001" },
  { year: 2020, title: "Internasional", description: "Mulai mengekspor produk ke pasar Asia Tenggara" },
  { year: 2023, title: "Inovasi", description: "Pengembangan lini produk silicone food grade dan medical grade" },
]

export default function TimelineAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <div className="h-[400px] w-full">
        <div className="h-full w-1 bg-muted mx-auto"></div>
      </div>
    )

  return (
    <div className="relative h-[400px] w-full">
      <div className="absolute h-full w-1 bg-muted left-1/2 -translate-x-1/2"></div>

      {timelineEvents.map((event, index) => (
        <motion.div
          key={event.year}
          className={`absolute w-full flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
          style={{ top: `${index * 20}%` }}
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-4" : "pl-4"}`}>
            <div className="mb-1 text-lg font-bold">{event.year}</div>
            <div className="mb-1 font-medium">{event.title}</div>
            <div className="text-sm text-muted-foreground">{event.description}</div>
          </div>

          <motion.div
            className="absolute w-4 h-4 bg-primary rounded-full left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

