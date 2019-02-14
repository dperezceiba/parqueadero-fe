import { Vehiculo } from './vehiculo';
import { Entrada } from './entrada';

export interface Salida {
    idSalida:number;
    fechaSalida: Date;
    valor: number;
    entrada: Entrada;
}
