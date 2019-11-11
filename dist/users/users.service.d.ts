export declare class UsersService {
    private users;
    getAllUsers(): Promise<{
        id: number;
        name: string;
    }[]>;
    getUser(id: number): Promise<{
        id: number;
        name: string;
    }>;
    addUser(user: any): Promise<void>;
}
