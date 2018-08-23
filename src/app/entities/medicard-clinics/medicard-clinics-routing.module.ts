import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicardClinicsComponent } from './medicard-clinics.component';

const routes: Routes = [
    { path: 'medicard-clinics', component: MedicardClinicsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedicardClinicsRoutingModule { }
