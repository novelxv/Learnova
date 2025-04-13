import { Injectable, UnauthorizedException } from "@nestjs/common"
import type { JwtService } from "@nestjs/jwt"
import type { UsersService } from "../users/users.service"
import type { LoginDto } from "./dto/login.dto"
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(email)
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (isPasswordValid) {
        const { password, ...result } = user
        return result
      }

      return null
    } catch (error) {
      return null
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password)

    if (!user) {
      throw new UnauthorizedException("Invalid credentials")
    }

    const payload = { email: user.email, sub: user.id, role: user.role }

    return {
      access_token: this.jwtService.sign(payload),
      user,
    }
  }
}