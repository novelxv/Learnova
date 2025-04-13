import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Exclude } from "class-transformer"
import { ForumPost } from "../../forum/entities/forum-post.entity"
import { ForumComment } from "../../forum/entities/forum-comment.entity"

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  @Exclude()
  password: string

  @Column({ nullable: true })
  avatar: string

  @Column({ default: "user" })
  role: string

  @Column({ nullable: true })
  school: string

  @Column({ nullable: true })
  grade: string

  @Column("simple-array", { nullable: true })
  interests: string[]

  @OneToMany(
    () => ForumPost,
    (post) => post.author,
  )
  posts: ForumPost[]

  @OneToMany(
    () => ForumComment,
    (comment) => comment.author,
  )
  comments: ForumComment[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}