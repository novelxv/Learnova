"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react"
import { getPost, createComment, likePost } from "@/lib/api"

export default function PostDetailPage() {
  const params = useParams()
  const postId = params.id as string
  const [post, setPost] = useState<any>(null)
  const [comment, setComment] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPost(postId)
        setPost(response.data)
      } catch (error) {
        console.error("Error fetching post:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (postId) {
      fetchPost()
    }
  }, [postId])

  const handleLike = async () => {
    try {
      const response = await likePost(postId)
      setPost((prev: any) => ({ ...prev, likes: response.data.likes }))
    } catch (error) {
      console.error("Error liking post:", error)
    }
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    setIsSubmitting(true)
    try {
      const response = await createComment(postId, { content: comment })
      setPost((prev: any) => ({
        ...prev,
        comments: [...prev.comments, response.data],
      }))
      setComment("")
    } catch (error) {
      console.error("Error submitting comment:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post tidak ditemukan</h1>
          <Link href="/forum">
            <Button>Kembali ke Forum</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/forum" className="text-purple-500 hover:underline mb-6 inline-block">
        &larr; Kembali ke Forum
      </Link>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex gap-2 mb-4">
            {post.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="bg-blue-50">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-3 mb-6">
            <Image
              src={post.author?.avatar || "/images/avatar.png"}
              alt={post.author?.name || "User"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{post.author?.name || "User"}</p>
              <p className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            <p className="whitespace-pre-line">{post.content}</p>
          </div>

          <div className="flex items-center gap-6 border-t pt-4">
            <button onClick={handleLike} className="flex items-center gap-2 text-gray-500 hover:text-purple-500">
              <ThumbsUp className="h-5 w-5" />
              <span>{post.likes || 0}</span>
            </button>
            <div className="flex items-center gap-2 text-gray-500">
              <MessageSquare className="h-5 w-5" />
              <span>{post.comments?.length || 0}</span>
            </div>
            <button className="flex items-center gap-2 text-gray-500 hover:text-purple-500 ml-auto">
              <Share2 className="h-5 w-5" />
              <span>Bagikan</span>
            </button>
          </div>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Komentar ({post.comments?.length || 0})</h2>
        <form onSubmit={handleSubmitComment} className="mb-6">
          <Textarea
            placeholder="Tulis komentar Anda..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mb-2"
            rows={3}
          />
          <Button type="submit" disabled={isSubmitting || !comment.trim()}>
            {isSubmitting ? "Mengirim..." : "Kirim Komentar"}
          </Button>
        </form>

        <div className="space-y-4">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment: any) => (
              <Card key={comment.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={comment.author?.avatar || "/images/avatar.png"}
                      alt={comment.author?.name || "User"}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{comment.author?.name || "User"}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="whitespace-pre-line">{comment.content}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="text-sm text-gray-500 hover:text-purple-500 flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{comment.likes || 0}</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">Belum ada komentar. Jadilah yang pertama berkomentar!</p>
          )}
        </div>
      </div>
    </div>
  )
}