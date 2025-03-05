"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import ProcessAnimation from "@/components/process-animation"

const productionSteps = [
  {
    id: 1,
    title: "Material Selection",
    description: "Pemilihan bahan baku silicone berkualitas tinggi sesuai dengan spesifikasi produk yang akan dibuat",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Mixing & Compounding",
    description: "Pencampuran silicone dengan aditif dan bahan penguat untuk mendapatkan sifat mekanik yang diinginkan",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Molding & Shaping",
    description: "Pembentukan silicone menggunakan teknik compression molding, injection molding, atau extrusion",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Curing & Vulcanization",
    description: "Proses pemanasan untuk mengaktifkan ikatan silang dan memberikan sifat elastis pada silicone",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Finishing & QC",
    description: "Proses finishing dan quality control untuk memastikan produk memenuhi standar kualitas",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(1)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Proses Produksi</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mengenal lebih dekat proses pembuatan silicone rubber berkualitas tinggi
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl py-12">
            <ProcessAnimation activeStep={activeStep} />

            <div className="mt-12">
              <Tabs
                defaultValue="1"
                value={activeStep.toString()}
                onValueChange={(value) => setActiveStep(Number.parseInt(value))}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-5">
                  {productionSteps.map((step) => (
                    <TabsTrigger key={step.id} value={step.id.toString()}>
                      Step {step.id}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {productionSteps.map((step) => (
                  <TabsContent key={step.id} value={step.id.toString()} className="mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <div className="grid gap-6 lg:grid-cols-2">
                            <div>
                              <img
                                src={step.image || "/placeholder.svg"}
                                alt={step.title}
                                width={600}
                                height={400}
                                className="rounded-lg object-cover"
                              />
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                              <h2 className="text-2xl font-bold">{step.title}</h2>
                              <p className="text-muted-foreground">{step.description}</p>
                              <div className="flex space-x-2">
                                <Button
                                  variant="outline"
                                  onClick={() => setActiveStep(step.id < 5 ? step.id + 1 : 1)}
                                  disabled={step.id === 5}
                                >
                                  {step.id === 5 ? "Selesai" : "Langkah Selanjutnya"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>

          <div className="mx-auto max-w-5xl py-12">
            <div className="rounded-lg bg-muted p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Video Proses Produksi</h2>
              <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Video thumbnail"
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover opacity-50"
                    />
                    <Button
                      size="icon"
                      className="absolute h-16 w-16 rounded-full"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-black text-white">
                    <p>Video player would appear here</p>
                    {/* In a real implementation, you would embed a video player here */}
                  </div>
                )}
              </div>
              <p className="mt-4 text-center text-muted-foreground">
                Lihat bagaimana kami menghasilkan produk silicone rubber berkualitas tinggi dengan teknologi modern dan
                quality control ketat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

