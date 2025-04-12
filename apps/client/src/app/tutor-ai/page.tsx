"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Paperclip, Send, Search } from "lucide-react"

export default function TutorAIPage() {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      question: "Penjelasan tentang Aljabar Linier",
      answer:
        "Nova menjelaskan konsep determinan matriks, cara menghitungnya dengan metode ekspansi kofaktor, serta penerapannya dalam sistem persamaan linear.",
      date: "28 Februari 2025, 14.20",
    },
    {
      id: 2,
      question: "Penjelasan tentang Aljabar Linier",
      answer:
        "Nova menjelaskan konsep determinan matriks, cara menghitungnya dengan metode ekspansi kofaktor, serta penerapannya dalam sistem persamaan linear.",
      date: "28 Februari 2025, 14.20",
    },
    {
      id: 3,
      question: "Penjelasan tentang Aljabar Linier",
      answer:
        "Nova menjelaskan konsep determinan matriks, cara menghitungnya dengan metode ekspansi kofaktor, serta penerapannya dalam sistem persamaan linear.",
      date: "28 Februari 2025, 14.20",
    },
    {
      id: 4,
      question: "Penjelasan tentang Aljabar Linier",
      answer:
        "Nova menjelaskan konsep determinan matriks, cara menghitungnya dengan metode ekspansi kofaktor, serta penerapannya dalam sistem persamaan linear.",
      date: "28 Februari 2025, 14.20",
    },
    {
      id: 5,
      question: "Penjelasan tentang Aljabar Linier",
      answer:
        "Nova menjelaskan konsep determinan matriks, cara menghitungnya dengan metode ekspansi kofaktor, serta penerapannya dalam sistem persamaan linear.",
      date: "28 Februari 2025, 14.20",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // In a real app, you would send the message to the backend
    // and get a response from the AI
    const newChat = {
      id: chatHistory.length + 1,
      question: message,
      answer: "Nova sedang memproses pertanyaan Anda...",
      date: new Date().toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    }

    setChatHistory([newChat, ...chatHistory])
    setMessage("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 bg-blue-50 rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/4 flex justify-center">
            <Image src="/images/mascot-pencil.png" alt="Nova AI Tutor" width={150} height={150} />
          </div>
          <div className="md:w-3/4">
            <h1 className="text-2xl font-bold mb-2">Bingung dengan materi? Tenang, ada Nova!</h1>
            <p className="mb-6">
              <span className="font-bold">Nova</span>, teman belajarmu, siap membantu menjawab pertanyaan Matematika,
              Sains, Bahasa, dan lainnya! Kirim pertanyaan atau unggah tugas, dan dapatkan penjelasan lengkap!
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="flex-1 relative">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tanya Nova apapun"
                  className="pr-10"
                />
                <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Paperclip className="h-5 w-5" />
                </button>
              </div>
              <Button type="submit" className="bg-teal-500 hover:bg-teal-600">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Chat History */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Lihat lagi hasil pembelajaran mu dengan Nova</h2>
        <div className="mb-6">
          <div className="relative">
            <Input placeholder="Cari percakapan" className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        <div className="space-y-4">
          {chatHistory.map((chat) => (
            <Card key={chat.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{chat.question}</h3>
                  <span className="text-sm text-gray-500">{chat.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{chat.answer}</p>
                <div className="flex justify-end">
                  <Button variant="outline" className="text-teal-500 border-teal-500 hover:bg-teal-50">
                    Lanjutkan Percakapan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}