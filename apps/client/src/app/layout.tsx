import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Learnova - Belajar Bebas, Masa Depan Cerdas",
  description: "Platform pembelajaran interaktif untuk siswa Indonesia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "Novel",
    image: "/images/avatar.png",
  }

  return (
    <html lang="id">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header user={user} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}