import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisTypeComponent } from './diagnosis-type.component';

const routes: Routes = [
    { path: 'diagnosis-type', component: DiagnosisTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisTypeRoutingModule { }
