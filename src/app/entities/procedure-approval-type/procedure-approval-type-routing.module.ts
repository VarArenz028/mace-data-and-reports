import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureApprovalTypeComponent } from './procedure-approval-type.component';

const routes: Routes = [
    { path: 'procedure-approval-type', component: ProcedureApprovalTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureApprovalTypeRoutingModule { }
