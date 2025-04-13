import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { TutorAiService } from "./tutor-ai.service"
import { TutorAiController } from "./tutor-ai.controller"
import { Chat } from "./entities/chat.entity"
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [TypeOrmModule.forFeature([Chat]), ConfigModule],
  controllers: [TutorAiController],
  providers: [TutorAiService],
})
export class TutorAiModule {}