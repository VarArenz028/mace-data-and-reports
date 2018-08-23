import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestChannelTypeComponent } from './request-channel-type.component';


const routes: Routes = [
    { path: 'request-channel-type', component: RequestChannelTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestChannelTypeRoutingModule { }
