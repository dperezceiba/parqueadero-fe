import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VigilanteDashboardComponent } from './vigilante-dashboard/vigilante-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [VigilanteDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
