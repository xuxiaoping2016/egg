import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(req: any, res: any, next: any): Promise<{
        id: number;
        name: string;
    }[]>;
    getUser(): void;
    addUser(): void;
}
