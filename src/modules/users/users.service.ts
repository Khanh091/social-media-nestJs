import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm/repository/Repository";

@Injectable()
export class UsersService {
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>;
    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
}