import { IsEmail, IsOptional, IsString, MinLength } from "class-validator"

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string

  @IsOptional()
  @IsString()
  avatar?: string

  @IsOptional()
  @IsString()
  school?: string

  @IsOptional()
  @IsString()
  grade?: string

  @IsOptional()
  interests?: string[]
}