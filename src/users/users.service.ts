import { Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Post()
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  @Get()
  findAll() {
    return this.userRepository.find();
  }
  
  @Get('id')
  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  @Patch('id')
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userRepository.remove(id);
  }
}
