import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller()
export class AppController {
  @UseGuards(AuthGuard("local"))
  @Post("auth/login")
  login(@Req() req: Request) {
    return req.user
  }
}
