import { browser, by, element } from 'protractor';

export class IngresoCarroPage {

    public dataCarro = {
        placa: 'AXT-001',
        modelo: '2019'
    };

    navigateTo() {
        return browser.get('/parqueo/ingresar-carro');
    }

    fillDataCarro(dataCarro: any = this.dataCarro) {
        element(by.css('[name="placa"]')).sendKeys(dataCarro.placa);
        element(by.css('[name="modelo"]')).sendKeys(dataCarro.modelo);
    }

    getTitleText(){
        return element(by.css('h4')).getText()
    }

    getValorInputPlaca(){
        return element(by.css('[name="placa"]')).getAttribute("value");
    }

    getValorInputModelo(){
        return element(by.css('[name="modelo"]')).getAttribute("value");
    }

    getBotonRegistrar() {
        return element(by.cssContainingText('button', 'Registrar'));
    }

    getBotonCancelar(){
        return element(by.cssContainingText('button', 'Cancelar'));
    }

}