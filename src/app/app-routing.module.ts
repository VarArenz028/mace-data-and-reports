import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from './shared/guard/auth.guard';
import { HeaderModule} from './layouts/header/header.module';

const routes: Routes = [
     {
        path: '',
        loadChildren: './layouts/header/header.module#HeaderModule',
        //loadChildren: () => HeaderModule,
        //canActivate: [AuthGuard]
    },    
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'        
    },
    {
        path: '',
        loadChildren: './shared/login/login.module#LoginModule'        
    },    

    {
        path: '',
        loadChildren: './entities/admission-type/admission-type.module#AdmissionTypeModule'        
    },
    {
        path: '',
        loadChildren: './entities/approval-type/approval-type.module#ApprovalTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/procedure-approval-type/procedure-approval-type.module#ProcedureApprovalTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/diagnosis-type/diagnosis-type.module#DiagnosisTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/diagnosis-case-type/diagnosis-case-type.module#DiagnosisCaseTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/diagnosis-remarks-type/diagnosis-remarks-type.module#DiagnosisRemarksCaseTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/disposition-type/disposition-type.module#DispositionTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/doctor-type/doctor-type.module#DoctorTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/document-type/document-type.module#DocumentTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/inquiry-type/inquiry-type.module#InquiryTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/inpatient-status-type/inpatient-status-type.module#InpatientStatusTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/loa-checklist-type/loa-checklist-type.module#LoaChecklistTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/loa-issuance-type/loa-issuance-type.module#LoaIssuanceTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/other-information-type/other-information-type.module#OtherInformationTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/procedure-cost-center-type/procedure-cost-center-type.module#ProcedureCostCenterTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/procedure-group-type/procedure-group-type.module#ProcedureGroupTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/procedure-remarks-type/procedure-remarks-type.module#ProcedureRemarksTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/procedure-type/procedure-type.module#ProcedureTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/request-channel-type/request-channel-type.module#RequestChannelTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/room-type/room-type.module#RoomTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/service-type/service-type.module#ServiceTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/service-sub-type/service-sub-type.module#ServiceSubTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/status-type/status-type.module#StatusTypeModule'
    },
    {
        path: '',
        loadChildren: './entities/medicard-clinics/medicard-clinics.module#MedicardClinicsModule'
    },
    {
        path: '',
        loadChildren: './entities/procedure/procedure.module#ProcedureModule'
    },
    {
        path: '',
        loadChildren: './entities/other-services/other-services.module#OtherServicesModule'
    },
    {
        path: '',
        loadChildren: './entities/team-definition/team-definition.module#TeamDefinitionModule'
    },
    {
        path: '',
        loadChildren: './entities/team-coverage/team-coverage.module#TeamCoverageModule'
    },
    {
        path: '',
        loadChildren: './entities/temporary-procedure/temporary-procedure.module#TemporaryProcedureModule'
    },
    {
        path: '',
        loadChildren: './entities/diagnosis-and-procedure/diagnosis-and-procedure.module#DiagnosisAndProcedureModule'
    },
    {
        path: '',
        loadChildren: './entities/hospital-procedure/hospital-procedure.module#HospitalProcedureModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), ],
    exports: [RouterModule]
})
export class AppRoutingModule { }