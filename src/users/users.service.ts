import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  private readonly users: User[] = [
    new User(1, 'dilane', 'dilane'),
    new User(2, 'corine', 'corine'),
    new User(3, 'blondelle', 'blondelle'),
  ];

  public async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.getUsername === username);
  }
}
