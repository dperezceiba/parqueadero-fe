import { browser, by, element } from 'protractor';

export class IngresoMotoPage {

    public dataMoto = {
        placa: 'FOJ-00R',
        cilindraje: 700
    };

    navigateTo() {
        return browser.get('/parqueo/ingresar-moto');
    }

    fillDataMoto(dataMoto: any = this.dataMoto) {
        element(by.css('[name="placa"]')).sendKeys(dataMoto.placa);
        element(by.css('[name="cilindraje"]')).sendKeys(dataMoto.cilindraje);
    }

    getTitleText(){
        return element(by.css('h4')).getText()
    }

    getValorInputPlaca(){
        return element(by.css('[name="placa"]')).getAttribute("value");
    }

    getValorInputCilindraje(){
        return element(by.css('[name="cilindraje"]')).getAttribute("value");
    }

    getBotonRegistrar() {
        return element(by.cssContainingText('button', 'Registrar'));
    }

    getBotonCancelar(){
        return element(by.cssContainingText('button', 'Cancelar'));
    }

}