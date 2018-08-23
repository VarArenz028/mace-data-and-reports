import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureTypeComponent } from './procedure-type.component';


const routes: Routes = [
    { path: 'procedure-type', component: ProcedureTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureTypeRoutingModule { }
