import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionTypeComponent } from './admission-type.component';

const routes: Routes = [
    { path: 'admission-type', component: AdmissionTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionTypeRoutingModule { }
