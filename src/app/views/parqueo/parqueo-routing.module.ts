import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import { EstadoComponent } from './estado/estado.component';
import { IngresoCarroComponent } from './ingreso-carro/ingreso-carro.component';
import { IngresoMotoComponent } from './ingreso-moto/ingreso-moto.component';

const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Parqueo'
        },
        children: [
          {
            path: '',
            redirectTo: 'estado'
          },
          {
            path: 'estado',
            component: EstadoComponent
          },
          {
            path: 'ingresar-carro',
            component: IngresoCarroComponent
          },
          {
            path: 'ingresar-moto',
            component: IngresoMotoComponent
          },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParqueoRoutingModule { }
