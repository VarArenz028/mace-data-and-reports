import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorTypeComponent } from './doctor-type.component';

const routes: Routes = [
  { path: 'doctor-type', component: DoctorTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorTypeRoutingModule { }
