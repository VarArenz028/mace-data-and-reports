import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispositionTypeComponent } from './disposition-type.component';

const routes: Routes = [
  { path: 'disposition-type', component: DispositionTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositionTypeRoutingModule { }
