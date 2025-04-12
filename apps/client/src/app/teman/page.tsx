import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus } from "lucide-react"

export default function TemanPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Add Friends */}
        <div className="md:w-7/12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Tambah Teman</h2>
              <div className="mb-4">
                <Input placeholder="Cari teman" className="w-full mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                  <Select>
                    <SelectTrigger className="w-full md:w-auto">
                      <SelectValue placeholder="Jenjang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sd">SD</SelectItem>
                      <SelectItem value="smp">SMP</SelectItem>
                      <SelectItem value="sma">SMA</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full md:w-auto">
                      <SelectValue placeholder="Pelajaran Favorit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matematika">Matematika</SelectItem>
                      <SelectItem value="sains">Sains</SelectItem>
                      <SelectItem value="bahasa">Bahasa Indonesia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <FriendCard key={i} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Friend List */}
        <div className="md:w-5/12">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Daftar Temanmu</h2>
                <Link href="/teman/semua" className="text-teal-500 hover:underline">
                  Lihat Semua
                </Link>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <FriendListCard key={i} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Study Groups */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Grup Belajar Kamu</h2>
          <Link href="/teman/grup" className="text-teal-500 hover:underline">
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <StudyGroupCard key={i} />
          ))}
        </div>
      </div>

      {/* Find Study Groups */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Cari Grup Belajar</h2>
          <Link href="/teman/cari-grup" className="text-teal-500 hover:underline">
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <StudyGroupCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FriendCard() {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50">
      <Image src="/images/avatar.png" alt="Friend Avatar" width={60} height={60} className="rounded-full" />
      <div className="flex-1">
        <h3 className="font-bold">Thea X.</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          Hai, aku Thea X. dari SMA Ilila. Yuk belajar bareng! Aku juga fokus untuk belajar UTBK Matematika nih. Aku
          juga tertarik ke seni dan kreativitas.
        </p>
        <div className="flex gap-2 mt-1">
          <Badge variant="outline" className="text-xs">
            SMA
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Matematika
          </Badge>
        </div>
      </div>
      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
        <UserPlus className="h-4 w-4" />
      </Button>
    </div>
  )
}

function FriendListCard() {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50">
      <Image src="/images/avatar.png" alt="Friend Avatar" width={50} height={50} className="rounded-full" />
      <div className="flex-1">
        <h3 className="font-bold">Raffael</h3>
        <p className="text-sm text-gray-600 line-clamp-1">
          Kenaliin aku Raffael dari Bandung sekarang lagi fokus belajar matematika...
        </p>
      </div>
      <Button size="sm" variant="outline" className="text-teal-500 border-teal-500 hover:bg-teal-50">
        Kirim Pesan
      </Button>
    </div>
  )
}

function StudyGroupCard() {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src="/images/study-group.jpg"
          alt="Study Group"
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-white text-xl font-bold text-center px-4">SIGMA BOYS</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm mb-4">
          Hanya untuk si Paling Sigma. Yang ga Sigma ga akan masuk di sini!!! Yuk mewing bersama kita dan bergabung
          dengan SIGMA BOYS!!!
        </p>
        <Button variant="outline" className="w-full text-teal-500 border-teal-500 hover:bg-teal-50">
          Lihat Grup
        </Button>
      </CardContent>
    </Card>
  )
}