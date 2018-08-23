import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaChecklistTypeComponent } from './loa-checklist-type.component';

const routes: Routes = [
    { path: 'loa-checklist-type', component: LoaChecklistTypeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoaChecklistTypeRoutingModule { }
