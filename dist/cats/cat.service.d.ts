import { Cat } from './cat.interface';
export declare class CatService {
    private readonly cats;
    create(cat: Cat): void;
    findAll(): Cat[];
}
