import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaIssuanceTypeComponent } from './loa-issuance-type.component';

const routes: Routes = [
    { path: 'loa-issuance-type', component: LoaIssuanceTypeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoaIssuanceTypeRoutingModule { }
