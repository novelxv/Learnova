import { Controller, Get, Param, Post, Body, UseGuards, Request } from "@nestjs/common"
import type { MaterialsService } from "./materials.service"
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard"

@Controller("materials")
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  findAllMaterials() {
    return this.materialsService.findAllMaterials()
  }

  @Get(":id")
  findMaterialById(@Param("id") id: string) {
    return this.materialsService.findMaterialById(id);
  }

  @Get("category/:id")
  findMaterialsByCategory(@Param("id") categoryId: string) {
    return this.materialsService.findMaterialsByCategory(categoryId);
  }

  @Get("categories")
  findAllCategories() {
    return this.materialsService.findAllCategories()
  }

  @UseGuards(JwtAuthGuard)
  @Post(":id/progress")
  updateProgress(@Request() req, @Param("id") materialId: string, @Body("progress") progress: number) {
    return this.materialsService.updateProgress(req.user.id, materialId, progress)
  }

  @UseGuards(JwtAuthGuard)
  @Get("progress")
  getUserProgress(@Request() req) {
    return this.materialsService.getUserProgress(req.user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Get("recommended")
  getRecommendedMaterials(@Request() req) {
    return this.materialsService.getRecommendedMaterials(req.user.id)
  }
}