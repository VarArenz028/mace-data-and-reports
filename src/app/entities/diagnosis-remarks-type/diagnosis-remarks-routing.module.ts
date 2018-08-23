import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisRemarksTypeComponent } from './diagnosis-remarks-type.component';

const routes: Routes = [
  { path: 'diagnosis-remarks-type', component: DiagnosisRemarksTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisRemarksTypeRoutingModule { }
