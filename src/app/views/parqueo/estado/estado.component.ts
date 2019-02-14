import { Component, OnInit } from '@angular/core';
import { mensajeConfirmacion, mensajeInformacion } from '../..';
import { Entrada } from 'src/app/model/entrada';
import { faSignOutAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { EntradaService } from 'src/app/model/services/entrada.service';
import { SalidaService } from 'src/app/model/services/salida.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

  salidaIcon = faSignOutAlt;
  detalleIcon = faClipboardList;

  resultado: Entrada[] = []

  entradaCurrent: Entrada;
  modalRef: NgbModalRef;

  constructor(private entradaService: EntradaService,
    private salidaService: SalidaService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    this.cargarEntradas()
  }

  cargarEntradas() {
    this.entradaService.getEntradasActivas().subscribe(res => {
      console.log(res)
      this.resultado = res
    })
  }

  abrirDetalle(template: any, entrada: Entrada) {
    console.log(entrada)
    this.entradaCurrent = entrada;
    this.modalRef = this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' })
  }

  generarSalida() {
    mensajeConfirmacion('Generar Salida de Vehiculo', '¿Esta seguro que desea generar la salida de este vehiculo?', 'Deseo...').then(res => {
      if (res.value) {
        this.salidaService.registrarSalida(this.entradaCurrent).subscribe(salida => {
          mensajeInformacion('Salida Registrada', `Valor a pagar: $${salida.valor}`).then(r => {
            this.cargarEntradas()
            this.modalRef.close()
          })
        })
      }
    })
  }

}
