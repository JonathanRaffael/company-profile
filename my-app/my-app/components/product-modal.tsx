"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductModal({ product, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative z-50 max-h-[90vh] w-full max-w-lg overflow-auto rounded-lg border bg-background p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="mt-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="aspect-square w-full rounded-md object-cover"
              />
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium">Deskripsi</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Spesifikasi</h3>
                <p className="text-muted-foreground">{product.details}</p>
              </div>

              <div className="pt-4">
                <Button className="w-full" onClick={onClose}>
                  Hubungi Untuk Penawaran
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

