"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_cat_dto_1 = require("./create-cat.dto");
const cat_service_1 = require("./cat.service");
let CatController = class CatController {
    constructor(catService) {
        this.catService = catService;
    }
    create(createCatDto) {
        console.log(createCatDto);
        this.catService.create(createCatDto);
        return 'This action adds a new cat';
    }
    async findAll() {
        return this.catService.findAll();
    }
    findAll2(request) {
        return 'Tnvmnvmis action returns all cats';
    }
    getDocs(version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }
    findOne(params) {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", String)
], CatController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatController.prototype, "findAll", null);
__decorate([
    common_1.Get('ab*cd'),
    common_1.HttpCode(204),
    common_1.Redirect('https://nestjs.com', 301),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CatController.prototype, "findAll2", null);
__decorate([
    common_1.Get('docs'),
    common_1.Redirect('https://docs.nestjs.com', 302),
    __param(0, common_1.Query('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatController.prototype, "getDocs", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CatController.prototype, "findOne", null);
CatController = __decorate([
    common_1.Controller('cats'),
    __metadata("design:paramtypes", [cat_service_1.CatService])
], CatController);
exports.CatController = CatController;
//# sourceMappingURL=cat.controller.js.map