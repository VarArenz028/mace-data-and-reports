import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisCaseTypeComponent } from './diagnosis-case-type.component';

const routes: Routes = [
    { path: 'diagnosis-case-type', component: DiagnosisCaseTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisCaseTypeRoutingModule { }
