import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.getPassword === password) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  login(user: any) {
    const payload = { username: user.username, sub: user.id };

    const accessToken = this.jwtService.sign(payload);

    return { access_token: accessToken };
  }
}
