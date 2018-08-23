import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisAndProcedureComponent } from './diagnosis-and-procedure.component';

const routes: Routes = [
    { path: 'diagnosis-and-procedure', component: DiagnosisAndProcedureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisAndProcedureRoutingModule { }
