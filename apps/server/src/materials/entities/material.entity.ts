import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from "typeorm"
import { MaterialCategory } from "./material-category.entity"
import { MaterialProgress } from "./material-progress.entity"

@Entity()
export class Material {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column()
    title: string
    
    @Column("text")
    description: string
    
    @Column()
    thumbnail: string
    
    @Column("text", { nullable: true })
    content: string
    
    @Column({ default: "beginner" })
    level: string
    
    @Column("simple-array")
    tags: string[]
    
    @Column({ default: true })
    isPublished: boolean
    
    @ManyToOne(
        () => MaterialCategory,
        (category) => category.materials,
    )
    category: MaterialCategory
    
    @OneToMany(
        () => MaterialProgress,
        (progress) => progress.material,
    )
    progress: MaterialProgress[]
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
}  