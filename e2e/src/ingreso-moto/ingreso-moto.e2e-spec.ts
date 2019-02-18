import { IngresoMotoPage } from "./ingreso-moto.po";

describe('workspace-project App -> Ingreso Moto', () => {
    let page: IngresoMotoPage;

    beforeEach(() => {
        page = new IngresoMotoPage();
    });

    it('should display title ingreso moto!', () => {
        page.navigateTo();
        expect(page.getTitleText()).toBe('Ingreso de vehiculo - Moto')
    })

    it('should display reset moto click!', async () => {
        page.navigateTo();
        page.fillDataMoto();

        expect(page.getValorInputCilindraje()).toBe(page.dataMoto.cilindraje+'')
        expect(page.getValorInputPlaca()).toBe(page.dataMoto.placa)
        
        page.getBotonCancelar().click().then(res => {
            expect(page.getValorInputPlaca()).toBe('');
            expect(page.getValorInputCilindraje()).toBe('');
        })

    });

    it('should display ingreso moto click!', async () => {
        page.navigateTo();
        page.fillDataMoto()

        expect(page.getValorInputCilindraje()).toBe(page.dataMoto.cilindraje+'')
        expect(page.getValorInputPlaca()).toBe(page.dataMoto.placa)

        page.getBotonRegistrar().click().then(res => {
            expect(page.getBotonRegistrar().getText()).toBe('Registrar')
        });

    });

    


})