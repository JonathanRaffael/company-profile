import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "./../components/ui/button"
import HeroAnimation from "./../components/hero-animation"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Solusi Silicone Rubber Berkualitas Tinggi
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Kami memproduksi silicone rubber premium untuk berbagai kebutuhan industri dengan standar kualitas
                  internasional.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button className="w-full min-[400px]:w-auto">
                    Lihat Produk
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full min-[400px]:w-auto">
                    Hubungi Kami
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Produk Unggulan</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Silicone rubber berkualitas tinggi untuk berbagai aplikasi industri
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Industrial Grade Silicone",
                description: "Untuk kebutuhan industri berat dengan ketahanan suhu tinggi",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                title: "Food Grade Silicone",
                description: "Aman untuk kontak dengan makanan, bebas bahan berbahaya",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                title: "Medical Grade Silicone",
                description: "Untuk peralatan medis dengan standar sterilisasi tinggi",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-60 items-center justify-center rounded-md bg-muted">
                  <img
                    src={product.image || "/products/default.png"}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <Link href="/products" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/products">
              <Button variant="outline" size="lg">
                Lihat Semua Produk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Klien Kami</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dipercaya oleh perusahaan terkemuka di berbagai industri
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src="/images/Picture2.jpeg"
                  alt={`Client logo ${i + 1}`}
                  width={120}
                  height={80}
                  className="grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Siap Bekerja Sama?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hubungi kami untuk konsultasi dan penawaran khusus sesuai kebutuhan bisnis Anda
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

