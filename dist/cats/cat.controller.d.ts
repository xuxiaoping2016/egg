import { CatService } from './cat.service';
import { Request } from 'express';
export declare class CatController {
    private readonly catService;
    constructor(catService: CatService);
    create(): string;
    findAll(request: Request): string;
    getDocs(version: any): {
        url: string;
    };
    findOne(params: any): string;
}
