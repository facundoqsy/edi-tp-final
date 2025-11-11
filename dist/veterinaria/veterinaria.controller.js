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
exports.VeterinariaController = void 0;
const common_1 = require("@nestjs/common");
const veterinaria_service_1 = require("./veterinaria.service");
let VeterinariaController = class VeterinariaController {
    srv;
    constructor(srv) {
        this.srv = srv;
    }
    listD() { return this.srv.listDuenios(); }
    createD(b) { return this.srv.createDuenio(b); }
    listM() { return this.srv.listMascotas(); }
    createM(b) { return this.srv.createMascota(b); }
    listT() { return this.srv.listTurnos(); }
    createT(b) { return this.srv.createTurno(b); }
    listDiag() { return this.srv.listDiagnosticos(); }
    createDiag(b) { return this.srv.createDiagnostico(b); }
    listVac() { return this.srv.listVacunas(); }
    createVac(b) { return this.srv.createVacuna(b); }
    listTrat() { return this.srv.listTratamientos(); }
    createTrat(b) { return this.srv.createTratamiento(b); }
    getHistorial(id) {
        return this.srv.getHistorial(id);
    }
};
exports.VeterinariaController = VeterinariaController;
__decorate([
    (0, common_1.Get)('duenios'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "listD", null);
__decorate([
    (0, common_1.Post)('duenios'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "createD", null);
__decorate([
    (0, common_1.Get)('mascotas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "listM", null);
__decorate([
    (0, common_1.Post)('mascotas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "createM", null);
__decorate([
    (0, common_1.Get)('turnos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "listT", null);
__decorate([
    (0, common_1.Post)('turnos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "createT", null);
__decorate([
    (0, common_1.Get)('diagnosticos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "listDiag", null);
__decorate([
    (0, common_1.Post)('diagnosticos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "createDiag", null);
__decorate([
    (0, common_1.Get)('vacunas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "listVac", null);
__decorate([
    (0, common_1.Post)('vacunas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "createVac", null);
__decorate([
    (0, common_1.Get)('tratamientos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "listTrat", null);
__decorate([
    (0, common_1.Post)('tratamientos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "createTrat", null);
__decorate([
    (0, common_1.Get)('historial/:mascotaId'),
    __param(0, (0, common_1.Param)('mascotaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VeterinariaController.prototype, "getHistorial", null);
exports.VeterinariaController = VeterinariaController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [veterinaria_service_1.VeterinariaService])
], VeterinariaController);
//# sourceMappingURL=veterinaria.controller.js.map