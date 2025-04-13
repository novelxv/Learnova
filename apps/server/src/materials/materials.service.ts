import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import type { Repository } from "typeorm"
import { Material } from "./entities/material.entity"
import { MaterialCategory } from "./entities/material-category.entity"
import { MaterialProgress } from "./entities/material-progress.entity"

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private materialsRepository: Repository<Material>,

    @InjectRepository(MaterialCategory)
    private categoriesRepository: Repository<MaterialCategory>,

    @InjectRepository(MaterialProgress)
    private progressRepository: Repository<MaterialProgress>,
  ) {}

  async findAllMaterials(): Promise<Material[]> {
    return this.materialsRepository.find({
      where: { isPublished: true },
      relations: ["category"],
      order: { createdAt: "DESC" },
    })
  }

  async findMaterialById(id: string): Promise<Material> {
    const material = await this.materialsRepository.findOne({
      where: { id, isPublished: true },
      relations: ["category"],
    })

    if (!material) {
      throw new NotFoundException(`Material with ID ${id} not found`)
    }

    return material
  }

  async findMaterialsByCategory(categoryId: string): Promise<Material[]> {
    return this.materialsRepository.find({
      where: { category: { id: categoryId }, isPublished: true },
      relations: ["category"],
      order: { createdAt: "DESC" },
    })
  }

  async findAllCategories(): Promise<MaterialCategory[]> {
    return this.categoriesRepository.find()
  }

  async updateProgress(userId: string, materialId: string, progress: number): Promise<MaterialProgress> {
    let materialProgress = await this.progressRepository.findOne({
      where: { user: { id: userId }, material: { id: materialId } },
    })

    if (!materialProgress) {
      materialProgress = this.progressRepository.create({
        user: { id: userId },
        material: { id: materialId },
        progress: 0,
      })
    }

    materialProgress.progress = progress
    return this.progressRepository.save(materialProgress)
  }

  async getUserProgress(userId: string): Promise<MaterialProgress[]> {
    return this.progressRepository.find({
      where: { user: { id: userId } },
      relations: ["material", "material.category"],
    })
  }

  async getRecommendedMaterials(userId: string): Promise<Material[]> {
    // To be implemented: recommendation algorithm
    // For now, just return the latest materials
    return this.materialsRepository.find({
      where: { isPublished: true },
      relations: ["category"],
      order: { createdAt: "DESC" },
      take: 4,
    })
  }
}