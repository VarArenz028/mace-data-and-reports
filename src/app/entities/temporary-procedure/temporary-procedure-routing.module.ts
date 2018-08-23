import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemporaryProcedureComponent } from './temporary-procedure.component';


const routes: Routes = [
    { path: 'temporary-procedure', component: TemporaryProcedureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemporaryProcedureRoutingModule { }
