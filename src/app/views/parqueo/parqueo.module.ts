import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoComponent } from './estado/estado.component';
import { IngresoMotoComponent } from './ingreso-moto/ingreso-moto.component';
import { IngresoCarroComponent } from './ingreso-carro/ingreso-carro.component';
import { ParqueoRoutingModule } from './parqueo-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EstadoComponent, IngresoMotoComponent, IngresoCarroComponent],
  imports: [
    CommonModule,
    ParqueoRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParqueoModule { }
