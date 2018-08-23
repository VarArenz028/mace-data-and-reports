import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureComponent } from './procedure.component';

const routes: Routes = [
    { path: 'procedure', component: ProcedureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureRoutingModule { }
