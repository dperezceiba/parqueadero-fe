import { EstadoEntradaPage } from "./estado.po";

describe('workspace-project App -> Estado de Vehiculos', () => {
    let page: EstadoEntradaPage;

    beforeEach(() => {
        page = new EstadoEntradaPage();
    });

    it('should display title listado de vihiculos!', () => {
        page.navigateTo();
        expect(page.getTitleText()).toBe('Listado de Vehiculos')
    })

})