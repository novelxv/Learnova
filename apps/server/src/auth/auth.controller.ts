import { Controller, Post, Body, UseGuards, Request } from "@nestjs/common"
import type { AuthService } from "./auth.service"
import type { LoginDto } from "./dto/login.dto"
import { LocalAuthGuard } from "./guards/local-auth.guard"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @UseGuards(LocalAuthGuard)
  @Post("login-with-guard")
  async loginWithGuard(@Request() req) {
    return this.authService.login({ email: req.user.email, password: req.user.password })
  }
}