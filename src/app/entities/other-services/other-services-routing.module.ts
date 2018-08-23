import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherServicesComponent } from './other-services.component';


const routes: Routes = [
    { path: 'other-services', component: OtherServicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherServicesRoutingModule { }
