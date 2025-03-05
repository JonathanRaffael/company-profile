import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TimelineAnimation from "@/components/timeline-animation"
import GalleryCarousel from "@/components/gallery-carousel"
import { Building2, Target, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tentang Kami</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mengenal lebih dekat perusahaan silicone rubber terdepan di Indonesia
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold">Sejarah Perusahaan</h2>
              <p className="text-muted-foreground">
                Didirikan pada tahun 2005, perusahaan kami telah berkembang dari sebuah workshop kecil menjadi produsen
                silicone rubber terkemuka di Indonesia. Dengan komitmen pada kualitas dan inovasi, kami terus
                mengembangkan produk yang memenuhi standar internasional.
              </p>
              <p className="text-muted-foreground">
                Perjalanan kami dimulai dengan fokus pada pasar lokal, namun kini produk kami telah diekspor ke berbagai
                negara di Asia Tenggara, menjadikan kami salah satu pemain utama di industri silicone rubber regional.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <TimelineAnimation />
            </div>
          </div>

          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="visi" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="visi">Visi</TabsTrigger>
                <TabsTrigger value="misi">Misi</TabsTrigger>
              </TabsList>
              <TabsContent value="visi" className="p-4">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <Target className="h-16 w-16 text-primary" />
                  <h3 className="text-2xl font-bold">Visi Kami</h3>
                  <p className="max-w-3xl text-muted-foreground">
                    Menjadi produsen silicone rubber terdepan di Asia Tenggara yang dikenal karena kualitas, inovasi,
                    dan komitmen terhadap kepuasan pelanggan.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="misi" className="space-y-4 p-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Award className="h-10 w-10 text-primary mb-4" />
                      <h4 className="text-lg font-bold">Kualitas Premium</h4>
                      <p className="text-sm text-muted-foreground">
                        Menghasilkan produk silicone rubber berkualitas tinggi yang memenuhi standar internasional
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Building2 className="h-10 w-10 text-primary mb-4" />
                      <h4 className="text-lg font-bold">Inovasi Berkelanjutan</h4>
                      <p className="text-sm text-muted-foreground">
                        Terus mengembangkan teknologi dan proses produksi untuk menciptakan solusi inovatif
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Users className="h-10 w-10 text-primary mb-4" />
                      <h4 className="text-lg font-bold">Kepuasan Pelanggan</h4>
                      <p className="text-sm text-muted-foreground">
                        Memberikan layanan terbaik dan solusi yang disesuaikan dengan kebutuhan spesifik pelanggan
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mx-auto max-w-5xl py-12">
            <h2 className="text-2xl font-bold text-center mb-8">Fasilitas & Tim Kami</h2>
            <GalleryCarousel />
          </div>
        </div>
      </section>
    </main>
  )
}

