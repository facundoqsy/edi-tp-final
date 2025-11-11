"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeterinariaService = void 0;
const common_1 = require("@nestjs/common");
const file_db_1 = require("../common/file-db");
const P = {
    duenios: 'data/duenios.json',
    mascotas: 'data/mascotas.json',
    turnos: 'data/turnos.json',
    diagnosticos: 'data/diagnosticos.json',
    vacunas: 'data/vacunas.json',
    tratamientos: 'data/tratamientos.json',
};
let VeterinariaService = class VeterinariaService {
    nextId(list) {
        return list.length ? Math.max(...list.map(x => x.id)) + 1 : 1;
    }
    listDuenios() {
        return (0, file_db_1.readJSON)(P.duenios, []);
    }
    getDuenio(id) {
        const d = this.listDuenios().find(x => x.id === id);
        if (!d)
            throw new common_1.NotFoundException('Dueño no encontrado');
        return d;
    }
    createDuenio(data) {
        if (!data?.nombre)
            throw new common_1.BadRequestException('nombre requerido');
        const list = this.listDuenios();
        const nuevo = { id: this.nextId(list), ...data };
        (0, file_db_1.writeJSON)(P.duenios, [...list, nuevo]);
        return nuevo;
    }
    listMascotas() {
        return (0, file_db_1.readJSON)(P.mascotas, []);
    }
    getMascota(id) {
        const m = this.listMascotas().find(x => x.id === id);
        if (!m)
            throw new common_1.NotFoundException('Mascota no encontrada');
        return m;
    }
    createMascota(data) {
        if (!data?.duenioId)
            throw new common_1.BadRequestException('duenioId requerido');
        this.getDuenio(data.duenioId);
        const list = this.listMascotas();
        const nuevo = { id: this.nextId(list), ...data };
        (0, file_db_1.writeJSON)(P.mascotas, [...list, nuevo]);
        return nuevo;
    }
    listTurnos() {
        return (0, file_db_1.readJSON)(P.turnos, []);
    }
    createTurno(data) {
        this.getMascota(data.mascotaId);
        const fecha = new Date(data.fecha);
        if (isNaN(+fecha) || fecha < new Date())
            throw new common_1.BadRequestException('fecha inválida o pasada');
        const list = this.listTurnos();
        const nuevo = { id: this.nextId(list), ...data };
        (0, file_db_1.writeJSON)(P.turnos, [...list, nuevo]);
        return nuevo;
    }
    listDiagnosticos() {
        return (0, file_db_1.readJSON)(P.diagnosticos, []);
    }
    createDiagnostico(data) {
        this.getMascota(data.mascotaId);
        if (!data.descripcion)
            throw new common_1.BadRequestException('Descripción requerida');
        const list = this.listDiagnosticos();
        const nuevo = { id: this.nextId(list), ...data };
        (0, file_db_1.writeJSON)(P.diagnosticos, [...list, nuevo]);
        return nuevo;
    }
    listVacunas() {
        return (0, file_db_1.readJSON)(P.vacunas, []);
    }
    createVacuna(data) {
        this.getMascota(data.mascotaId);
        if (!data.nombre)
            throw new common_1.BadRequestException('Nombre de vacuna requerido');
        const list = this.listVacunas();
        const nuevo = { id: this.nextId(list), ...data };
        (0, file_db_1.writeJSON)(P.vacunas, [...list, nuevo]);
        return nuevo;
    }
    listTratamientos() {
        return (0, file_db_1.readJSON)(P.tratamientos, []);
    }
    createTratamiento(data) {
        this.getMascota(data.mascotaId);
        if (!data.descripcion)
            throw new common_1.BadRequestException('Descripción requerida');
        const list = this.listTratamientos();
        const nuevo = { id: this.nextId(list), ...data };
        (0, file_db_1.writeJSON)(P.tratamientos, [...list, nuevo]);
        return nuevo;
    }
    getHistorial(mascotaId) {
        this.getMascota(mascotaId);
        return {
            diagnosticos: this.listDiagnosticos().filter(d => d.mascotaId === mascotaId),
            vacunas: this.listVacunas().filter(v => v.mascotaId === mascotaId),
            tratamientos: this.listTratamientos().filter(t => t.mascotaId === mascotaId),
        };
    }
};
exports.VeterinariaService = VeterinariaService;
exports.VeterinariaService = VeterinariaService = __decorate([
    (0, common_1.Injectable)()
], VeterinariaService);
//# sourceMappingURL=veterinaria.service.js.map