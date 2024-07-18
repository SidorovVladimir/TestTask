import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.models';
import { CreateUserDTO } from './dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private readonly userRepository: typeof User,
    ) {}

    async create(dto: CreateUserDTO): Promise<CreateUserDTO> {

        await this.userRepository.create({
            firstname: dto.firstname,
            username: dto.username,
            password: dto.password,
            email: dto.email,
        })
        return dto;
        
    }


    
}
