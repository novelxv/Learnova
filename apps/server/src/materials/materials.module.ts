import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { MaterialsService } from "./materials.service"
import { MaterialsController } from "./materials.controller"
import { Material } from "./entities/material.entity"
import { MaterialCategory } from "./entities/material-category.entity"
import { MaterialProgress } from "./entities/material-progress.entity"

@Module({
  imports: [TypeOrmModule.forFeature([Material, MaterialCategory, MaterialProgress])],
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule {}