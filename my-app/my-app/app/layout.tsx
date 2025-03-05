import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Button } from "./../components/ui/button"
import { ThemeProvider } from "./../components/theme-provider"
import { ModeToggle } from "./../components/mode-toggle"
import { Menu, X, Phone } from "lucide-react"
import "./../app/globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Silicone Rubber Company",
  description: "Produsen silicone rubber berkualitas tinggi untuk berbagai kebutuhan industri",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <nav className="flex items-center space-x-2">
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="hidden sm:flex">
                        <Phone className="mr-2 h-4 w-4" />
                        Hubungi Kami
                      </Button>
                    </Link>
                    <ModeToggle />
                    <MobileNav />
                  </nav>
                </div>
              </div>
            </header>
            {children}
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  &copy; {new Date().getFullYear()} Silicone Rubber Company. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:gap-6">
                  <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                    Tentang Kami
                  </Link>
                  <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
                    Produk
                  </Link>
                  <Link href="/process" className="text-sm font-medium hover:underline underline-offset-4">
                    Proses
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Kontak
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold">PT. Hang Tong Manufactory</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/" className="transition-colors hover:text-foreground/80">
          Beranda
        </Link>
        <Link href="/about" className="transition-colors hover:text-foreground/80">
          Tentang Kami
        </Link>
        <Link href="/products" className="transition-colors hover:text-foreground/80">
          Produk & Layanan
        </Link>
        <Link href="/process" className="transition-colors hover:text-foreground/80">
          Proses Produksi
        </Link>
        <Link href="/contact" className="transition-colors hover:text-foreground/80">
          Kontak
        </Link>
      </nav>
    </div>
  )
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label htmlFor="mobile-menu" className="cursor-pointer">
        <Menu className="h-6 w-6 peer-checked:hidden" />
        <X className="hidden h-6 w-6 peer-checked:block" />
      </label>
      <div className="fixed inset-0 top-16 z-50 hidden bg-background peer-checked:block">
        <div className="container py-4">
          <nav className="flex flex-col space-y-4 text-lg font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              Beranda
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              Tentang Kami
            </Link>
            <Link href="/products" className="transition-colors hover:text-foreground/80">
              Produk & Layanan
            </Link>
            <Link href="/process" className="transition-colors hover:text-foreground/80">
              Proses Produksi
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80">
              Kontak
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

