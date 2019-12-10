import { CreateCatDto } from './create-cat.dto';
import { CatService } from './cat.service';
import { Request } from 'express';
import { Cat } from './cat.interface';
export declare class CatController {
    private readonly catService;
    constructor(catService: CatService);
    create(createCatDto: CreateCatDto): string;
    findAll(): Promise<Cat[]>;
    findAll2(request: Request): string;
    getDocs(version: any): {
        url: string;
    };
    findOne(params: any): string;
}
