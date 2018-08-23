import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureCostCenterTypeComponent } from './procedure-cost-center-type.component';

const routes: Routes = [
    { path: 'procedure-cost-center-type', component: ProcedureCostCenterTypeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcedureCostCenterTypeRoutingModule { }
