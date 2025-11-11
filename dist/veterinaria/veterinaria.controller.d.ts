import { VeterinariaService } from './veterinaria.service';
export declare class VeterinariaController {
    private srv;
    constructor(srv: VeterinariaService);
    listD(): {
        id: number;
        nombre: string;
        telefono: string;
    }[];
    createD(b: any): {
        nombre: string;
        telefono: string;
        id: number;
    };
    listM(): {
        id: number;
        nombre: string;
        especie: string;
        duenioId: number;
    }[];
    createM(b: any): {
        nombre: string;
        especie: string;
        duenioId: number;
        id: number;
    };
    listT(): {
        id: number;
        mascotaId: number;
        fecha: string;
        motivo?: string;
    }[];
    createT(b: any): {
        mascotaId: number;
        fecha: string;
        motivo?: string | undefined;
        id: number;
    };
    listDiag(): {
        id: number;
        mascotaId: number;
        descripcion: string;
        fecha: string;
    }[];
    createDiag(b: any): {
        mascotaId: number;
        fecha: string;
        descripcion: string;
        id: number;
    };
    listVac(): {
        id: number;
        mascotaId: number;
        nombre: string;
        fecha: string;
    }[];
    createVac(b: any): {
        nombre: string;
        mascotaId: number;
        fecha: string;
        id: number;
    };
    listTrat(): {
        id: number;
        mascotaId: number;
        descripcion: string;
        fecha: string;
    }[];
    createTrat(b: any): {
        mascotaId: number;
        fecha: string;
        descripcion: string;
        id: number;
    };
    getHistorial(id: number): {
        diagnosticos: {
            id: number;
            mascotaId: number;
            descripcion: string;
            fecha: string;
        }[];
        vacunas: {
            id: number;
            mascotaId: number;
            nombre: string;
            fecha: string;
        }[];
        tratamientos: {
            id: number;
            mascotaId: number;
            descripcion: string;
            fecha: string;
        }[];
    };
}
