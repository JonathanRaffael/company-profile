"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama harus diisi minimal 2 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  phone: z.string().min(10, { message: "Nomor telepon tidak valid" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Pesan harus diisi minimal 10 karakter" }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hubungi Kami</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Konsultasikan kebutuhan silicone rubber Anda dengan tim kami
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Kirim Pesan</h2>
                  <p className="text-muted-foreground">
                    Isi formulir di bawah ini dan tim kami akan menghubungi Anda segera
                  </p>

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg bg-green-50 p-4 text-green-700"
                    >
                      <p className="font-medium">Pesan Anda telah terkirim!</p>
                      <p className="text-sm">Tim kami akan segera menghubungi Anda.</p>
                    </motion.div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nama Lengkap</FormLabel>
                              <FormControl>
                                <Input placeholder="Masukkan nama lengkap" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="email@perusahaan.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nomor Telepon</FormLabel>
                                <FormControl>
                                  <Input placeholder="+62 8xx xxxx xxxx" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Perusahaan (Opsional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Nama perusahaan Anda" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pesan</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Jelaskan kebutuhan atau pertanyaan Anda"
                                  className="min-h-32"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                        </Button>
                      </form>
                    </Form>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@siliconecompany.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Telepon</h3>
                      <p className="text-muted-foreground">+62 21 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-muted-foreground">linkedin.com/company/siliconecompany</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Alamat</h3>
                      <p className="text-muted-foreground">
                        Jl. Industri Raya No. 123, Kawasan Industri Jababeka, Cikarang, Bekasi 17530, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Lokasi Kami</h2>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7376211576863!2d107.13956!3d-6.2912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTcnMjguNCJTIDEwN8KwMDgnMjIuNCJF!5e0!3m2!1sen!2sid!4v1616000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

