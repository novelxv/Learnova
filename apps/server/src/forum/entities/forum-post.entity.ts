import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from "typeorm"
import { User } from "../../users/entities/user.entity"
import { ForumComment } from "./forum-comment.entity"

@Entity()
export class ForumPost {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column()
    title: string
    
    @Column("text")
    content: string
    
    @Column("simple-array")
    tags: string[]
    
    @Column({ default: 0 })
    views: number
    
    @Column({ default: 0 })
    likes: number
    
    @ManyToOne(
        () => User,
        (user) => user.posts,
    )
    @JoinColumn()
    author: User
    
    @OneToMany(
        () => ForumComment,
        (comment) => comment.post,
    )
    comments: ForumComment[]
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
}