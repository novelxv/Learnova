import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm"
import { User } from "../../users/entities/user.entity"
import { Material } from "./material.entity"

@Entity()
export class MaterialProgress {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column("float")
    progress: number
    
    @ManyToOne(() => User)
    @JoinColumn()
    user: User
    
    @ManyToOne(
        () => Material,
        (material) => material.progress,
    )
    @JoinColumn()
    material: Material
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
}
