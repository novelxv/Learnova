import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare } from "lucide-react"

export default function ForumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Search */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 rounded-lg"></div>
        <div className="relative p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center mb-6">
              <Input placeholder="Cari Topik yang Sesuai" className="w-full rounded-full px-6 py-6 mb-2" />
              <Button className="w-full md:w-auto bg-purple-700 hover:bg-purple-800">Cari</Button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 text-sm">
                Apa itu sel prokariotik?
              </Badge>
              <Badge className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 text-sm">#KaburAjaDulu</Badge>
              <Badge className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 text-sm">
                Sungai terpanjang di dunia
              </Badge>
              <Badge className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 text-sm">Ekskresi</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Forum Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Kategori Forum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-blue-50 p-6 rounded-lg">
          <CategoryCard image="/images/category-math.png" title="Matematika" />
          <CategoryCard image="/images/category-science.png" title="Sains" />
          <CategoryCard image="/images/category-tech.png" title="Teknologi & Komputer" />
        </div>
      </section>

      {/* Top Contributors */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top 3 Kontributor Minggu Ini</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContributorCard name="Novelya Putri" image="/images/avatar.png" subject="Matematika" />
          <ContributorCard name="Novelya Putri" image="/images/avatar.png" subject="Matematika" />
          <ContributorCard name="Novelya Putri" image="/images/avatar.png" subject="Matematika" />
        </div>
      </section>

      {/* Popular Discussions */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Diskusi Terpopuler</h2>
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((i) => (
            <DiscussionCard key={i} />
          ))}
        </div>
      </section>
    </div>
  )
}

function CategoryCard({ image, title }: { image: string; title: string }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="mb-4">
          <Image src={image || "/placeholder.svg"} alt={title} width={120} height={120} />
        </div>
        <h3 className="text-xl font-bold text-center">{title}</h3>
      </CardContent>
    </Card>
  )
}

function ContributorCard({
  name,
  image,
  subject,
}: {
  name: string
  image: string
  subject: string
}) {
  return (
    <Card className="overflow-hidden border-2 hover:border-purple-300 transition-all">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={120} height={120} className="rounded-full" />
        </div>
        <h3 className="text-lg font-bold text-center mb-2">{name}</h3>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1">
            #{subject}
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            3+
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

function DiscussionCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col">
          <div className="flex gap-2 mb-2">
            <Badge variant="outline" className="bg-blue-50">
              Sains
            </Badge>
            <Badge variant="outline" className="bg-blue-50">
              SMP
            </Badge>
          </div>
          <Link href="/forum/post/1" className="text-lg font-bold hover:text-purple-600 mb-2">
            Apa perbedaan herbivora, karnivora, dan Omnivora?
          </Link>
          <div className="flex justify-between items-center mt-2">
            <Link href="/forum/post/1" className="text-blue-500 hover:underline">
              Lihat Jawaban (1)
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">1.2 rb</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">450</span>
              </div>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500 mt-2">28 Februari 2025, 14.20</div>
        </div>
      </CardContent>
    </Card>
  )
}