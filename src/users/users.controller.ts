import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAllUsers(req, res, next) {
        // return res.status(HttpStatus.OK).json([{
        //     id: 1, name: 'Test'
        // }]);
        return await this.usersService.getAllUsers()
        // return res.status(HttpStatus.OK).json(data)
    }

    @Get('/:id')
    getUser() {}

    @Post()
    addUser() {}
}