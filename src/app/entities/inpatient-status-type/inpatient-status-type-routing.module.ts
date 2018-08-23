import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InpatientStatusTypeComponent } from './inpatient-status-type.component';

const routes: Routes = [
  { path: 'inpatient-status-type', component: InpatientStatusTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InpatientStatusTypeRoutingModule { }
