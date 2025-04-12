"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Header = ({ user }: { user?: { name: string; image?: string } }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Learnova Logo" width={50} height={50} />
          <span className="text-xl font-bold text-pink-500">Learnova</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-pink-500">
            Beranda
          </Link>
          <Link href="/materi" className="text-gray-600 hover:text-pink-500">
            Materi
          </Link>
          <Link href="/teman" className="text-gray-600 hover:text-pink-500">
            Teman
          </Link>
          <Link href="/tutor-ai" className="text-gray-600 hover:text-pink-500">
            Tutor AI
          </Link>
          <Link href="/forum" className="text-gray-600 hover:text-pink-500">
            Forum
          </Link>
        </nav>

        {user ? (
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.image || ""} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline">{user.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profil</DropdownMenuItem>
                <DropdownMenuItem>Pengaturan</DropdownMenuItem>
                <DropdownMenuItem>Keluar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="ghost">Masuk</Button>
            <Button>Daftar</Button>
          </div>
        )}

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t">
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
            <Link href="/materi" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>
              Materi
            </Link>
            <Link href="/teman" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>
              Teman
            </Link>
            <Link href="/tutor-ai" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>
              Tutor AI
            </Link>
            <Link href="/forum" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>
              Forum
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header