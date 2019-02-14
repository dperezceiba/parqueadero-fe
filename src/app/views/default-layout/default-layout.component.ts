import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { faTachometerAlt, faListUl, faCar, faMotorcycle, faExpand, faCompressArrowsAlt, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  opciones: any[] = [
    {
      titulo: 'Dashboard',
      path: '',
      icono: faTachometerAlt
    },
    {
      titulo: 'Estado',
      path: '/parqueo/estado',
      icono: faListUl
    },
    {
      titulo: 'Ingresar Carro',
      path: '/parqueo/ingresar-carro',
      icono: faCar
    },
    {
      titulo: 'Ingresar Moto',
      path: '/parqueo/ingresar-moto',
      icono: faMotorcycle
    }
  ]

  toggleIcon = faBars;

  constructor() { }

  ngOnInit() {
    $("#menu-toggle").click(function (e) {
      $("#wrapper").toggleClass("toggled");
    });
  }

}
