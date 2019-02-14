import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

export function validarFormulario(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
            this.validarTodosCampos(control);
        }
    });
}

export function mensajeInformacion(titulo: string, mensaje: string): Promise<any> {
    return Swal.fire({
        title: titulo,
        html: mensaje,
        type: 'info',
        confirmButtonText: '<i class="fa fa-check"> Ok',
        confirmButtonClass: 'btn btn-primary',
        buttonsStyling: false
    })
}

export function mensajeError(titulo: string, mensaje: string): Promise<any> {
    return Swal.fire({
        title: titulo,
        html: mensaje,
        type: 'error',
        confirmButtonText: '<i class="fa fa-check"> Ok',
        confirmButtonClass: 'btn btn-primary',
        buttonsStyling: false
    })
}

export function mensajeConfirmacion(titulo: string, mensaje: string, botonConf?: string): Promise<any> {
    return Swal.fire({
        title: titulo,
        html: mensaje,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si' + (botonConf != null ? (', ' + botonConf) : ''),
        cancelButtonText: 'No',
        confirmButtonClass: 'btn btn-primary sweet-alert-confirmar',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false
    });
}


