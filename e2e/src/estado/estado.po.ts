import { browser, by, element } from 'protractor';

export class EstadoEntradaPage {

    navigateTo() {
        return browser.get('/parqueo/estado');
    }

    getTitleText(){
        return element(by.css('h4')).getText()
    }

}