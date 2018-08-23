import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceSubTypeComponent } from './service-sub-type.component';


const routes: Routes = [
    { path: 'service-sub-type', component: ServiceSubTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceSubTypeRoutingModule { }
