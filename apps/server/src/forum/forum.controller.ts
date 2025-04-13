import { Controller, Get, Post, Body, Param, UseGuards, Request } from "@nestjs/common"
import type { ForumService } from "./forum.service"
import type { CreatePostDto } from "./dto/create-post.dto"
import type { CreateCommentDto } from "./dto/create-comment.dto"
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard"

@Controller("forum")
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @UseGuards(JwtAuthGuard)
  @Post("posts")
  createPost(@Request() req, @Body() createPostDto: CreatePostDto) {
    return this.forumService.createPost(req.user.id, createPostDto)
  }

  @Get("posts")
  findAllPosts() {
    return this.forumService.findAllPosts()
  }

  @Get("posts/:id")
  findPostById(@Param("id") id: string) {
    return this.forumService.findPostById(id)
  }

  @UseGuards(JwtAuthGuard)
  @Post("posts/:id/comments")
  createComment(@Request() req, @Param("id") postId: string, @Body() createCommentDto: CreateCommentDto) {
    return this.forumService.createComment(req.user.id, postId, createCommentDto)
  }

  @Post("posts/:id/like")
  likePost(@Param("id") id: string) {
    return this.forumService.likePost(id)
  }

  @Get("tags/:tag")
  findPostsByTag(@Param("tag") tag: string) {
    return this.forumService.findPostsByTag(tag)
  }
}