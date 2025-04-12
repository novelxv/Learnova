import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor to include the auth token in requests
api.interceptors.request.use(
  (config) => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Auth API
export const login = (email: string, password: string) => {
  return api.post("/auth/login", { email, password })
}

export const register = (name: string, email: string, password: string) => {
  return api.post("/users", { name, email, password })
}

// User API
export const getCurrentUser = () => {
  return api.get("/users/me")
}

export const updateUserProfile = (userId: string, data: any) => {
  return api.patch(`/users/${userId}`, data)
}

// Forum API
export const getPosts = () => {
  return api.get("/forum/posts")
}

export const getPost = (postId: string) => {
  return api.get(`/forum/posts/${postId}`)
}

export const createPost = (data: any) => {
  return api.post("/forum/posts", data)
}

export const createComment = (postId: string, data: any) => {
  return api.post(`/forum/posts/${postId}/comments`, data)
}

export const likePost = (postId: string) => {
  return api.post(`/forum/posts/${postId}/like`)
}

// Materials API
export const getMaterials = () => {
  return api.get("/materials")
}

export const getMaterial = (materialId: string) => {
  return api.get(`/materials/${materialId}`)
}

export const getMaterialsByCategory = (categoryId: string) => {
  return api.get(`/materials/category/${categoryId}`)
}

export const getCategories = () => {
  return api.get("/materials/categories")
}

export const updateProgress = (materialId: string, progress: number) => {
  return api.post(`/materials/${materialId}/progress`, { progress })
}

export const getUserProgress = () => {
  return api.get("/materials/progress")
}

export const getRecommendedMaterials = () => {
  return api.get("/materials/recommended")
}

// Tutor AI API
export const createChat = (message: string) => {
  return api.post("/tutor-ai/chat", { message })
}

export const getUserChats = () => {
  return api.get("/tutor-ai/chats")
}

export default api