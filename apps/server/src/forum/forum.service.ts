import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import type { Repository } from "typeorm"
import { ForumPost } from "./entities/forum-post.entity"
import { ForumComment } from "./entities/forum-comment.entity"
import type { CreatePostDto } from "./dto/create-post.dto"
import type { CreateCommentDto } from "./dto/create-comment.dto"
import type { UsersService } from "../users/users.service"

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(ForumPost)
    private postsRepository: Repository<ForumPost>,

    @InjectRepository(ForumComment)
    private commentsRepository: Repository<ForumComment>,

    private usersService: UsersService,
  ) {}

  async createPost(userId: string, createPostDto: CreatePostDto): Promise<ForumPost> {
    const user = await this.usersService.findOne(userId)

    const post = this.postsRepository.create({
      ...createPostDto,
      author: user,
    })

    return this.postsRepository.save(post)
  }

  async findAllPosts(): Promise<ForumPost[]> {
    return this.postsRepository.find({
      relations: ["author", "comments", "comments.author"],
      order: { createdAt: "DESC" },
    })
  }

  async findPostById(id: string): Promise<ForumPost> {
    const post = await this.postsRepository.findOne({
      where: { id },
      relations: ["author", "comments", "comments.author"],
    })

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`)
    }

    // Increment view count
    post.views += 1
    await this.postsRepository.save(post)

    return post
  }

  async createComment(userId: string, postId: string, createCommentDto: CreateCommentDto): Promise<ForumComment> {
    const user = await this.usersService.findOne(userId)
    const post = await this.findPostById(postId)

    const comment = this.commentsRepository.create({
      ...createCommentDto,
      author: user,
      post,
    })

    return this.commentsRepository.save(comment)
  }

  async likePost(postId: string): Promise<ForumPost> {
    const post = await this.findPostById(postId)
    post.likes += 1
    return this.postsRepository.save(post)
  }

  async findPostsByTag(tag: string): Promise<ForumPost[]> {
    return this.postsRepository.find({
      where: { tags: tag },
      relations: ["author", "comments", "comments.author"],
      order: { createdAt: "DESC" },
    })
  }
}