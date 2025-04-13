import { Injectable } from "@nestjs/common"
import type { ConfigService } from "@nestjs/config"
import type { CreateChatDto } from "./dto/create-chat.dto"
import { InjectRepository } from "@nestjs/typeorm"
import type { Repository } from "typeorm"
import { Chat } from "./entities/chat.entity"
import type { User } from "../users/entities/user.entity"

@Injectable()
export class TutorAiService {
    constructor(
        private configService: ConfigService,
        @InjectRepository(Chat)
        private readonly chatRepository: Repository<Chat>,
    ) {}
    
    async createChat(user: User, createChatDto: CreateChatDto): Promise<Chat> {
        // To be implemented: call an AI service        
        const aiResponse = await this.generateAiResponse(createChatDto.message)
        
        const chat = this.chatRepository.create({
            question: createChatDto.message,
            answer: aiResponse,
            user,
        })
        
        return this.chatRepository.save(chat)
    }
    
    async getUserChats(userId: string): Promise<Chat[]> {
        return this.chatRepository.find({
            where: { user: { id: userId } },
            order: { createdAt: "DESC" },
        })
    }
    
    private async generateAiResponse(message: string): Promise<string> {
        // To be implemented: call an AI service to generate a response
        
        /*
        const openai = new OpenAI({
        apiKey: this.configService.get<string>('OPENAI_API_KEY'),
        });
        
        const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
        { role: "system", content: "You are Nova, a helpful educational AI assistant for Indonesian students." },
        { role: "user", content: message }
        ],
        temperature: 0.7,
        });
        
        return response.choices[0].message.content;
        */
        
        // Mock response for development
        return `Nova menjawab: "${message}" adalah pertanyaan yang bagus! Berikut penjelasan lengkapnya...`
    }
}