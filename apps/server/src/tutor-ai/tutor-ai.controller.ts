import { Controller, Post, Body, Get, UseGuards, Request } from "@nestjs/common"
import type { TutorAiService } from "./tutor-ai.service"
import type { CreateChatDto } from "./dto/create-chat.dto"
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard"

@Controller("tutor-ai")
@UseGuards(JwtAuthGuard)
export class TutorAiController {
  constructor(private readonly tutorAiService: TutorAiService) {}

  @Post("chat")
  createChat(@Request() req, @Body() createChatDto: CreateChatDto) {
    return this.tutorAiService.createChat(req.user, createChatDto)
  }

  @Get("chats")
  getUserChats(@Request() req) {
    return this.tutorAiService.getUserChats(req.user.id)
  }
}