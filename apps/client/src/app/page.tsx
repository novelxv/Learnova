import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/mascot-books.png"
                alt="Learnova Mascot"
                width={300}
                height={300}
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">
                Belajar Bebas,
                <br />
                Masa Depan Cerdas
              </h1>
              <p className="text-gray-600 mb-6">
                Akses materi, diskusi dengan teman, dan dapatkan jawaban dari Nova kapan saja
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-teal-500 hover:bg-teal-600">Yuk mulai!</Button>
                <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
                  Pelajari lebih lanjut
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Fitur kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="📱"
              title="Materi Lengkap Interaktif"
              description="Akses materi pembelajaran lengkap dalam berbagai format sesuai dengan kurikulum terbaru"
            />
            <FeatureCard
              icon="👥"
              title="Matchmaking Peer Learning"
              description="Belajar bersama dengan siswa lain berdasarkan topik dan minat belajar kamu"
            />
            <FeatureCard
              icon="💬"
              title="Forum Diskusi"
              description="Akses materi, diskusi dengan teman, dan dapatkan jawaban dari Nova kapan saja"
            />
            <FeatureCard
              icon="🤖"
              title="Tutor AI Adaptif"
              description="Akses materi, diskusi dengan teman, dan dapatkan jawaban dari Nova kapan saja"
            />
          </div>
        </div>
      </section>

      {/* Offline Mode Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-blue-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-900">
                  Internet
                  <br />
                  Bukan Masalah
                </h3>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-xl font-bold mb-4">Belajar kapan saja tanpa koneksi dengan Mode Offline!</h3>
              <p className="text-gray-600">
                Unduh materi yang dibutuhkan untuk diakses tanpa internet, hemat data dan ruang penyimpanan, dan
                otomatis disinkronkan saat kembali online
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Apa kata mereka tentang Learnova?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              image="/images/testimonial-1.jpg"
              quote="Learnova membantuku mencari teman belajar dan diskusi bersama. Belajar jadi mudah!"
              name="Elisa"
              description="Dengan Matchmaking Peer Learning, aku bisa berdiskusi dengan teman belajarku, membantuku memahami materi lebih baik lagi!"
            />
            <TestimonialCard
              image="/images/testimonial-2.jpg"
              quote="Materi Learnova sangat lengkap dan forum diskusi membantuku memahami soal-soal!"
              name="Erin"
              description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-col">
      <div className="bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({
  image,
  quote,
  name,
  description,
}: {
  image: string
  quote: string
  name: string
  description: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={`Testimonial by ${name}`}
            width={300}
            height={200}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <p className="mb-4">{quote}</p>
        <div className="flex items-center gap-3">
          <Image src="/images/avatar.png" alt={name} width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-bold">{name}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}