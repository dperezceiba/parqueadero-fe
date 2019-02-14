import { Component, OnInit } from '@angular/core';
import { faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EntradaService } from 'src/app/model/services/entrada.service';
import { Vehiculo } from 'src/app/model/vehiculo';
import { mensajeInformacion, validarFormulario } from '../..';

@Component({
  selector: 'app-ingreso-carro',
  templateUrl: './ingreso-carro.component.html',
  styleUrls: ['./ingreso-carro.component.scss']
})
export class IngresoCarroComponent implements OnInit {

  guardarIcon = faSave;
  cancelarIcon = faBan;

  formIngreso: FormGroup;

  constructor(private fBuilder: FormBuilder, private entradaService: EntradaService) {
    this.formIngreso = fBuilder.group({
      placa: [null, Validators.required],
      modelo: [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  onEnviar() {
    if (this.formIngreso.valid) {
      let vehiculo = new Vehiculo();
      vehiculo.placa = this.formIngreso.value.placa
      vehiculo.modelo = this.formIngreso.value.modelo
      this.entradaService.registrarIngresoCarro(vehiculo).subscribe(res => {
        mensajeInformacion('Entrada Registrada',
          `Entrada a vehiculo con placa: <strong>${res.vehiculo.placa}</strong>`).then(event => this.formIngreso.reset({}))
      })
    } else {
      validarFormulario(this.formIngreso);
    }
  }

}
