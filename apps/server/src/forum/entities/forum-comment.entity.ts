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
import { ForumPost } from "./forum-post.entity"

@Entity()
export class ForumComment {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column("text")
    content: string
    
    @Column({ default: 0 })
    likes: number
    
    @ManyToOne(
        () => User,
        (user) => user.comments,
    )
    @JoinColumn()
    author: User
    
    @ManyToOne(
        () => ForumPost,
        (post) => post.comments,
    )
    @JoinColumn()
    post: ForumPost
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
}  