import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalTypeComponent } from './approval-type.component';

const routes: Routes = [
    { path: 'approval-type', component: ApprovalTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalTypeRoutingModule { }
