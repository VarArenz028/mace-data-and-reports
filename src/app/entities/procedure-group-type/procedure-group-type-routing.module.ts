import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureGroupTypeComponent } from './procedure-group-type.component';

const routes: Routes = [
    { path: 'procedure-group-type', component: ProcedureGroupTypeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcedureGroupTypeRoutingModule { }
