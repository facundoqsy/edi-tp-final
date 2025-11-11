import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { readJSON, writeJSON } from '../common/file-db';

type Duenio = { id: number; nombre: string; telefono: string };
type Mascota = { id: number; nombre: string; especie: string; duenioId: number };
type Turno = { id: number; mascotaId: number; fecha: string; motivo?: string };
type Diagnostico = { id: number; mascotaId: number; descripcion: string; fecha: string };
type Vacuna = { id: number; mascotaId: number; nombre: string; fecha: string };
type Tratamiento = { id: number; mascotaId: number; descripcion: string; fecha: string };

const P = {
  duenios: 'data/duenios.json',
  mascotas: 'data/mascotas.json',
  turnos: 'data/turnos.json',
  diagnosticos: 'data/diagnosticos.json',
  vacunas: 'data/vacunas.json',
  tratamientos: 'data/tratamientos.json',
};

@Injectable()
export class VeterinariaService {
  private nextId(list: { id: number }[]) {
    return list.length ? Math.max(...list.map(x => x.id)) + 1 : 1;
  }

  // 🧍‍♂️ Dueños
  listDuenios() {
    return readJSON<Duenio[]>(P.duenios, []);
  }

  getDuenio(id: number) {
    const d = this.listDuenios().find(x => x.id === id);
    if (!d) throw new NotFoundException('Dueño no encontrado');
    return d;
  }

  createDuenio(data: Omit<Duenio, 'id'>) {
    if (!data?.nombre) throw new BadRequestException('nombre requerido');
    const list = this.listDuenios();
    const nuevo = { id: this.nextId(list), ...data };
    writeJSON(P.duenios, [...list, nuevo]);
    return nuevo;
  }

  // 🐶 Mascotas
  listMascotas() {
    return readJSON<Mascota[]>(P.mascotas, []);
  }

  getMascota(id: number) {
    const m = this.listMascotas().find(x => x.id === id);
    if (!m) throw new NotFoundException('Mascota no encontrada');
    return m;
  }

  createMascota(data: Omit<Mascota, 'id'>) {
    if (!data?.duenioId) throw new BadRequestException('duenioId requerido');
    this.getDuenio(data.duenioId);
    const list = this.listMascotas();
    const nuevo = { id: this.nextId(list), ...data };
    writeJSON(P.mascotas, [...list, nuevo]);
    return nuevo;
  }

  // 📅 Turnos
  listTurnos() {
    return readJSON<Turno[]>(P.turnos, []);
  }

  createTurno(data: Omit<Turno, 'id'>) {
    this.getMascota(data.mascotaId);
    const fecha = new Date(data.fecha);
    if (isNaN(+fecha) || fecha < new Date()) throw new BadRequestException('fecha inválida o pasada');
    const list = this.listTurnos();
    const nuevo = { id: this.nextId(list), ...data };
    writeJSON(P.turnos, [...list, nuevo]);
    return nuevo;
  }

  // 🩺 Diagnósticos
  listDiagnosticos() {
    return readJSON<Diagnostico[]>(P.diagnosticos, []);
  }

  createDiagnostico(data: Omit<Diagnostico, 'id'>) {
    this.getMascota(data.mascotaId);
    if (!data.descripcion) throw new BadRequestException('Descripción requerida');
    const list = this.listDiagnosticos();
    const nuevo = { id: this.nextId(list), ...data };
    writeJSON(P.diagnosticos, [...list, nuevo]);
    return nuevo;
  }

  // 💉 Vacunas
  listVacunas() {
    return readJSON<Vacuna[]>(P.vacunas, []);
  }

  createVacuna(data: Omit<Vacuna, 'id'>) {
    this.getMascota(data.mascotaId);
    if (!data.nombre) throw new BadRequestException('Nombre de vacuna requerido');
    const list = this.listVacunas();
    const nuevo = { id: this.nextId(list), ...data };
    writeJSON(P.vacunas, [...list, nuevo]);
    return nuevo;
  }

  // 💊 Tratamientos
  listTratamientos() {
    return readJSON<Tratamiento[]>(P.tratamientos, []);
  }

  createTratamiento(data: Omit<Tratamiento, 'id'>) {
    this.getMascota(data.mascotaId);
    if (!data.descripcion) throw new BadRequestException('Descripción requerida');
    const list = this.listTratamientos();
    const nuevo = { id: this.nextId(list), ...data };
    writeJSON(P.tratamientos, [...list, nuevo]);
    return nuevo;
  }

  // 📘 Historial médico (combinado)
  getHistorial(mascotaId: number) {
    this.getMascota(mascotaId);
    return {
      diagnosticos: this.listDiagnosticos().filter(d => d.mascotaId === mascotaId),
      vacunas: this.listVacunas().filter(v => v.mascotaId === mascotaId),
      tratamientos: this.listTratamientos().filter(t => t.mascotaId === mascotaId),
    };
  }
}
