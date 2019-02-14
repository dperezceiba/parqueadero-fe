import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Entrada } from '../entrada';
import { Vehiculo } from '../vehiculo';
import { mensajeError } from 'src/app/views';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  endpointActivas = 'http://localhost:8090/entrada/v1/activas';
  endpointIngresoCarro = 'http://localhost:8090/entrada/v1/carro';
  endpointIngresoMoto = 'http://localhost:8090/entrada/v1/moto';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getEntradasActivas(): Observable<Entrada[]> {
    return this.http.get(this.endpointActivas).pipe(
      map(this.extractData)
    )
  }

  registrarIngresoCarro(vehiculo: Vehiculo): Observable<Entrada> {
    return this.http.post<any>(this.endpointIngresoCarro, JSON.stringify(vehiculo), this.httpOptions).pipe(
      tap((entrada) => console.log(entrada)),
      catchError(this.handleError<any>('Entrada'))
    );
  }

  registrarIngresoMoto(vehiculo: Vehiculo): Observable<Entrada> {
    return this.http.post<any>(this.endpointIngresoMoto, JSON.stringify(vehiculo), this.httpOptions).pipe(
      tap((entrada) => console.log(entrada)),
      catchError(this.handleError<any>('entrada'))
    );
  }

  private extractData(res: any[]): Entrada[] {
    return res.map(data => {
      let entrada: Entrada = {
        idEntrada: data.idEntrada,
        vehiculo: data.vehiculo,
        tipo: data.tipoVehiculo,
        fechaEntrada: data.fechaEntrada
      }
      return entrada;
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      mensajeError(operation+' fallida', error.error.mensaje)
      return of(result as T);
    };
  }

}
