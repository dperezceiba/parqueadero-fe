import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import { VigilanteDashboardComponent } from './vigilante-dashboard/vigilante-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: VigilanteDashboardComponent,
        data: {
            title: 'Dashboard'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
