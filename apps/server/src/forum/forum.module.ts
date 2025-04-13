import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ForumService } from "./forum.service"
import { ForumController } from "./forum.controller"
import { ForumPost } from "./entities/forum-post.entity"
import { ForumComment } from "./entities/forum-comment.entity"
import { UsersModule } from "../users/users.module"

@Module({
  imports: [TypeOrmModule.forFeature([ForumPost, ForumComment]), UsersModule],
  controllers: [ForumController],
  providers: [ForumService],
  exports: [ForumService],
})
export class ForumModule {}