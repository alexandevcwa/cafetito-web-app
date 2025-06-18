export class TransportistaDto {
  constructor(cuiNit, nombreCompleto, estado, observaciones) {
    this.cuiNit = cuiNit;
    this.nombreCompleto = nombreCompleto;
    this.estado = estado;
    this.observaciones = observaciones;
  }

  toJSON() {
    return {
      cuiNit: this.cuiNit,
      nombreCompleto: this.nombreCompleto,
      estado: this.estado,
      observaciones: this.observaciones,
    };
  }
}
