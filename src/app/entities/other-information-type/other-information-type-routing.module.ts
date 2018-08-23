import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherInformationTypeComponent } from './other-information-type.component';

const routes: Routes = [
    { path: 'other-information-type', component: OtherInformationTypeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherInformationTypeRoutingModule { }
