import { IngresoCarroPage } from "./ingreso-carro.po";

describe('workspace-project App -> Ingreso Carro', () => {
    let page: IngresoCarroPage;

    beforeEach(() => {
        page = new IngresoCarroPage();
    });

    it('should display title ingreso carro!', () => {
        page.navigateTo();
        expect(page.getTitleText()).toBe('Ingreso de vehiculo - Carro')
    })

    it('should display reset carro click!', async () => {
        page.navigateTo();
        page.fillDataCarro();

        expect(page.getValorInputModelo()).toBe(page.dataCarro.modelo)
        expect(page.getValorInputPlaca()).toBe(page.dataCarro.placa)
        
        page.getBotonCancelar().click().then(res => {
            expect(page.getValorInputPlaca()).toBe('');
            expect(page.getValorInputModelo()).toBe('');
        })

    });

    it('should display ingreso carro click!', async () => {
        page.navigateTo();
        page.fillDataCarro();

        expect(page.getValorInputModelo()).toBe(page.dataCarro.modelo)
        expect(page.getValorInputPlaca()).toBe(page.dataCarro.placa)

        page.getBotonRegistrar().click().then(res => {
            expect(page.getBotonRegistrar().getText()).toBe('Registrar')
        });

    });

    


})