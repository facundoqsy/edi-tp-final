import { Controller, Get, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
import { VeterinariaService } from './veterinaria.service';

@Controller()
export class VeterinariaController {
  constructor(private srv: VeterinariaService) {}

  // Dueños
  @Get('duenios') listD() { return this.srv.listDuenios(); }
  @Post('duenios') createD(@Body() b: any) { return this.srv.createDuenio(b); }

  // Mascotas
  @Get('mascotas') listM() { return this.srv.listMascotas(); }
  @Post('mascotas') createM(@Body() b: any) { return this.srv.createMascota(b); }

  // Turnos
  @Get('turnos') listT() { return this.srv.listTurnos(); }
  @Post('turnos') createT(@Body() b: any) { return this.srv.createTurno(b); }

  // Diagnósticos
  @Get('diagnosticos') listDiag() { return this.srv.listDiagnosticos(); }
  @Post('diagnosticos') createDiag(@Body() b: any) { return this.srv.createDiagnostico(b); }

  // Vacunas
  @Get('vacunas') listVac() { return this.srv.listVacunas(); }
  @Post('vacunas') createVac(@Body() b: any) { return this.srv.createVacuna(b); }

  // Tratamientos
  @Get('tratamientos') listTrat() { return this.srv.listTratamientos(); }
  @Post('tratamientos') createTrat(@Body() b: any) { return this.srv.createTratamiento(b); }

  // Historial médico
  @Get('historial/:mascotaId')
  getHistorial(@Param('mascotaId', ParseIntPipe) id: number) {
    return this.srv.getHistorial(id);
  }
}
