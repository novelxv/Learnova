import { IsNotEmpty, IsString, IsArray } from "class-validator"

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  content: string

  @IsArray()
  @IsString({ each: true })
  tags: string[]
}