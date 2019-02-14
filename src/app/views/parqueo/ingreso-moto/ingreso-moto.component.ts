import { Component, OnInit } from '@angular/core';
import { faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Vehiculo } from 'src/app/model/vehiculo';
import { validarFormulario, mensajeInformacion } from '../..';
import { EntradaService } from 'src/app/model/services/entrada.service';

@Component({
  selector: 'app-ingreso-moto',
  templateUrl: './ingreso-moto.component.html',
  styleUrls: ['./ingreso-moto.component.scss']
})
export class IngresoMotoComponent implements OnInit {

  guardarIcon = faSave;
  cancelarIcon = faBan;

  formIngreso: FormGroup;

  constructor(private fBuilder: FormBuilder, private entradaService: EntradaService) {
    this.formIngreso = fBuilder.group({
      placa: [null, Validators.required],
      cilindraje: [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  onEnviar() {
    if (this.formIngreso.valid) {
      let vehiculo = new Vehiculo();
      vehiculo.placa = this.formIngreso.value.placa
      vehiculo.cilindraje = this.formIngreso.value.cilindraje
      this.entradaService.registrarIngresoMoto(vehiculo).subscribe(res => {
        mensajeInformacion('Entrada Registrada', `Entrada a vehiculo con placa: <strong>${res.vehiculo.placa}</strong>`).then(event => this.formIngreso.reset({}))
      })
    } else {
      validarFormulario(this.formIngreso);
    }

  }

}
