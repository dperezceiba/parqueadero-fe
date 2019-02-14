import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Entrada } from '../entrada';
import { tap, catchError } from 'rxjs/operators';
import { Salida } from '../salida';
import { mensajeError } from 'src/app/views';

@Injectable({
  providedIn: 'root'
})
export class SalidaService {

  endpointSalida = 'http://localhost:8090/salida/v1/registrar';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

 

  registrarSalida(entrada: Entrada): Observable<Salida> {
    return this.http.post<any>(this.endpointSalida, JSON.stringify(entrada), this.httpOptions).pipe(
      tap((salida) => console.log(salida)),
      catchError(this.handleError<any>('Salida'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      mensajeError(operation+' fallida', error.error.mensaje)
      return of(result as T);
    };
  }
}
