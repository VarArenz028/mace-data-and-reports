import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureRemarksTypeComponent } from './procedure-remarks-type.component';


const routes: Routes = [
    { path: 'procedure-remarks-type', component: ProcedureRemarksTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureRemarksTypeRoutingModule { }
