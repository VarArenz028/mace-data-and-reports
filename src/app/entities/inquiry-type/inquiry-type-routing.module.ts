import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquiryTypeComponent } from './inquiry-type.component';

const routes: Routes = [
  { path: 'inquiry-type', component: InquiryTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiryTypeRoutingModule { }
