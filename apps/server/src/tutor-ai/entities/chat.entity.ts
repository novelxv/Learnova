import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm"
import { User } from "../../users/entities/user.entity"

@Entity()
export class Chat {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column("text")
    question: string
    
    @Column("text")
    answer: string
    
    @ManyToOne(() => User)
    @JoinColumn()
    user: User
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
}  