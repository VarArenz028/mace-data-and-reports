import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalProcedureComponent } from './hospital-procedure.component';

const routes: Routes = [
  { path: 'hospital-procedure', component: HospitalProcedureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalProcedureRoutingModule { }
