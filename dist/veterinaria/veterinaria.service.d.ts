type Duenio = {
    id: number;
    nombre: string;
    telefono: string;
};
type Mascota = {
    id: number;
    nombre: string;
    especie: string;
    duenioId: number;
};
type Turno = {
    id: number;
    mascotaId: number;
    fecha: string;
    motivo?: string;
};
type Diagnostico = {
    id: number;
    mascotaId: number;
    descripcion: string;
    fecha: string;
};
type Vacuna = {
    id: number;
    mascotaId: number;
    nombre: string;
    fecha: string;
};
type Tratamiento = {
    id: number;
    mascotaId: number;
    descripcion: string;
    fecha: string;
};
export declare class VeterinariaService {
    private nextId;
    listDuenios(): Duenio[];
    getDuenio(id: number): Duenio;
    createDuenio(data: Omit<Duenio, 'id'>): {
        nombre: string;
        telefono: string;
        id: number;
    };
    listMascotas(): Mascota[];
    getMascota(id: number): Mascota;
    createMascota(data: Omit<Mascota, 'id'>): {
        nombre: string;
        especie: string;
        duenioId: number;
        id: number;
    };
    listTurnos(): Turno[];
    createTurno(data: Omit<Turno, 'id'>): {
        mascotaId: number;
        fecha: string;
        motivo?: string | undefined;
        id: number;
    };
    listDiagnosticos(): Diagnostico[];
    createDiagnostico(data: Omit<Diagnostico, 'id'>): {
        mascotaId: number;
        fecha: string;
        descripcion: string;
        id: number;
    };
    listVacunas(): Vacuna[];
    createVacuna(data: Omit<Vacuna, 'id'>): {
        nombre: string;
        mascotaId: number;
        fecha: string;
        id: number;
    };
    listTratamientos(): Tratamiento[];
    createTratamiento(data: Omit<Tratamiento, 'id'>): {
        mascotaId: number;
        fecha: string;
        descripcion: string;
        id: number;
    };
    getHistorial(mascotaId: number): {
        diagnosticos: Diagnostico[];
        vacunas: Vacuna[];
        tratamientos: Tratamiento[];
    };
}
export {};
