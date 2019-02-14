import { Vehiculo } from './vehiculo';

export interface Entrada {
    idEntrada:number;
    tipo: string;
    fechaEntrada: Date;
    vehiculo: Vehiculo;
}
