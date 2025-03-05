"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductModal from "@/components/product-modal"
import { motion } from "framer-motion"

// Definisi interface Product
interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  details: string;
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Industrial Grade Silicone Sheet",
    category: "industrial",
    description: "Lembaran silicone rubber untuk aplikasi industri dengan ketahanan suhu tinggi hingga 300°C",
    image: "/products/Picture2.png",
    details: "Tersedia dalam berbagai ketebalan (0.5mm - 20mm) dan warna. Tahan terhadap minyak, bahan kimia, dan UV. Ideal untuk gasket, seal, dan aplikasi industri berat."
  },
  {
    id: 2,
    name: "Food Grade Silicone Tube",
    category: "food",
    description: "Tabung silicone food grade untuk industri makanan dan minuman",
    image: "/placeholder.svg?height=300&width=300",
    details: "Memenuhi standar FDA dan LFGB. Bebas BPA, phthalate, dan bahan berbahaya. Tersedia dalam berbagai diameter untuk kebutuhan industri makanan dan minuman."
  },
  {
    id: 3,
    name: "Medical Grade Silicone Parts",
    category: "medical",
    description: "Komponen silicone untuk peralatan medis dengan standar sterilisasi tinggi",
    image: "/placeholder.svg?height=300&width=300",
    details: "Biokompatibel dan memenuhi standar ISO 10993. Dapat disterilisasi dengan autoclave, EtO, dan radiasi gamma. Ideal untuk implant, kateter, dan peralatan medis lainnya."
  },
  {
    id: 4,
    name: "Automotive Silicone Parts",
    category: "industrial",
    description: "Komponen silicone untuk industri otomotif dengan ketahanan suhu dan vibrasi tinggi",
    image: "/placeholder.svg?height=300&width=300",
    details: "Tahan terhadap fluida otomotif, panas ekstrem, dan vibrasi. Ideal untuk gasket, seal, hoses, dan komponen mesin lainnya."
  },
  {
    id: 5,
    name: "Silicone Baking Mats",
    category: "food",
    description: "Alas panggang silicone food grade untuk kebutuhan rumah tangga dan industri",
    image: "/placeholder.svg?height=300&width=300",
    details: "Non-stick, tahan panas hingga 250°C, dan mudah dibersihkan. Tersedia dalam berbagai ukuran dan desain untuk kebutuhan bakery dan rumah tangga."
  },
  {
    id: 6,
    name: "Silicone O-Rings",
    category: "industrial",
    description: "O-ring silicone untuk aplikasi sealing di berbagai industri",
    image: "/placeholder.svg?height=300&width=300",
    details: "Tersedia dalam berbagai ukuran standar dan kustom. Tahan terhadap kompresi, ozon, dan penuaan. Ideal untuk aplikasi sealing di industri minyak dan gas, otomotif, dan manufaktur."
  }
]

export default function ProductsPage() {
  // Perbaikan tipe state untuk selectedProduct
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory)
  
  const openProductModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
  
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Produk & Layanan</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Solusi silicone rubber berkualitas tinggi untuk berbagai kebutuhan industri
              </p>
            </div>
          </div>
          
          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">Semua</TabsTrigger>
                <TabsTrigger value="industrial">Industrial</TabsTrigger>
                <TabsTrigger value="food">Food Grade</TabsTrigger>
                <TabsTrigger value="medical">Medical</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-6">
                <motion.div 
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredProducts.map((product) => (
                    <motion.div key={product.id} variants={item}>
                      <Card className="overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-bold">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.description}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => openProductModal(product)}
                          >
                            Detail Produk
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mx-auto max-w-5xl py-12">
            <div className="rounded-lg bg-muted p-8">
              <h2 className="text-2xl font-bold mb-4">Layanan Kustomisasi</h2>
              <p className="text-muted-foreground mb-6">
                Kami menyediakan layanan kustomisasi produk silicone rubber sesuai dengan spesifikasi dan kebutuhan khusus Anda. Tim engineer kami siap membantu dari tahap desain hingga produksi.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-background p-4">
                  <h3 className="text-lg font-bold mb-2">Konsultasi Teknis</h3>
                  <p className="text-sm text-muted-foreground">Konsultasi dengan tim engineer berpengalaman untuk solusi optimal</p>
                </div>
                <div className="rounded-lg bg-background p-4">
                  <h3 className="text-lg font-bold mb-2">Prototyping</h3>
                  <p className="text-sm text-muted-foreground">Pembuatan prototipe cepat untuk pengujian dan validasi desain</p>
                </div>
                <div className="rounded-lg bg-background p-4">
                  <h3 className="text-lg font-bold mb-2">Produksi Massal</h3>
                  <p className="text-sm text-muted-foreground">Kapasitas produksi besar dengan quality control ketat</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact">
                  <Button>Konsultasikan Kebutuhan Anda</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {isModalOpen && selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </main>
  )
}
