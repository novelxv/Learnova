import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function MateriPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Current Learning */}
      <section className="mb-12">
        <h1 className="text-2xl font-bold mb-6">Halo sobat Nova! Siap belajar?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CourseCard subject="Matematika" title="Aljabar Linier" progress={50} />
          <CourseCard subject="Sains" title="Sel & Molekul" progress={70} />
          <CourseCard subject="Bahasa Indonesia" title="Kalimat Efektif" progress={30} />
        </div>
        <div className="flex justify-end mt-4">
          <Link href="/materi/riwayat" className="text-teal-500 hover:underline">
            Lihat Riwayat
          </Link>
        </div>
        <div className="flex justify-end mt-2 gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Subject Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Pilih kelas berdasarkan kategori</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SubjectCard
            icon="📊"
            title="Matematika"
            description="Pahami konsep dasar hingga lanjutan dalam Matematika, dari aritmetika, aljabar, hingga trigonometri dengan metode interaktif"
          />
          <SubjectCard
            icon="🔬"
            title="Sains"
            description="Eksplorasi dunia sains dengan eksperimen virtual dan penjelasan visual yang mudah dipahami"
          />
          <SubjectCard
            icon="🌎"
            title="Ilmu Sosial"
            description="Pelajari sejarah, dinamika ekonomi, geografi dunia, dan hubungan sosial dengan cara yang lebih menarik"
          />
          <SubjectCard
            icon="📝"
            title="Bahasa Indonesia"
            description="Tingkatkan kemampuan membaca, menulis, dan memahami teks serta aturan tata bahasa yang benar"
          />
          <SubjectCard
            icon="🇬🇧"
            title="Bahasa Inggris"
            description="Belajar bahasa Inggris dengan metode yang menyenangkan dan interaktif"
          />
          <SubjectCard
            icon="💻"
            title="Teknologi & Komputer"
            description="Pelajari dasar-dasar pemrograman, literasi digital, dan kemanan siber untuk masa depan teknologi"
          />
          <SubjectCard
            icon="🎨"
            title="Seni & Kreativitas"
            description="Ekspresikan kreativitas melalui seni, musik, desain, dan keterampilan kreatif lainnya"
          />
          <SubjectCard
            icon="🧠"
            title="Pendidikan Karakter & Keterampilan Hidup"
            description="Bangun kebajikan baik, keterampilan komunikasi, manajemen waktu, dan etika digital"
          />
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Rekomendasi untuk kamu</h2>
          <Link href="/materi/rekomendasi" className="text-teal-500 hover:underline">
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <RecommendationCard key={i} />
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

function CourseCard({
  subject,
  title,
  progress,
}: {
  subject: string
  title: string
  progress: number
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src="/images/course-thumbnail.jpg"
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-white text-gray-800">{subject}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold mb-2">{title}</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="text-right text-xs text-gray-500">Bab {Math.floor(progress / 20) + 1} dari 7</div>
      </CardContent>
    </Card>
  )
}

function SubjectCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4">{icon}</div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function RecommendationCard() {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src="/images/course-thumbnail.jpg"
          alt="Course"
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-blue-100 text-blue-800 border-0">Teknologi & Komputer</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold mb-2">Dasar Pemrograman Python</h3>
        <p className="text-sm text-gray-600 mb-4">Belajar dasar-dasar pemrograman dengan bahasa Python</p>
      </CardContent>
    </Card>
  )
}