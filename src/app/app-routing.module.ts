import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { DefaultLayoutComponent } from './views/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'parqueo',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [AuthGuardGuard],
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'parqueo',
        loadChildren: './views/parqueo/parqueo.module#ParqueoModule'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
