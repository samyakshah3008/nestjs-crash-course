import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): Object {
    return { username: 'Samyak', email: 'samyak@gmail.com' };
  }
}
