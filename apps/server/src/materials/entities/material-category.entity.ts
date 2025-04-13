import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Material } from "./material.entity"

@Entity()
export class MaterialCategory {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  icon: string

  @Column("text")
  description: string

  @OneToMany(
    () => Material,
    (material) => material.category,
  )
  materials: Material[]
}