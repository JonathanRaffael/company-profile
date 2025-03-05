"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Pabrik produksi silicone rubber",
    caption: "Fasilitas produksi modern dengan teknologi terkini",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Tim engineer",
    caption: "Tim engineer berpengalaman dalam pengembangan produk",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Laboratorium pengujian",
    caption: "Laboratorium pengujian untuk quality control yang ketat",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Tim manajemen",
    caption: "Tim manajemen yang berdedikasi untuk kepuasan pelanggan",
  },
]

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (!mounted)
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
        <img src={images[0].src || "/placeholder.svg"} alt={images[0].alt} className="h-full w-full object-cover" />
      </div>
    )

  return (
    <div className="relative">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          <p className="text-sm">{images[currentIndex].caption}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button variant="outline" size="icon" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Image {index + 1}</span>
            </button>
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={handleNext}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

