import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';   //angular bootstrap
import { NgbModal, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { HeaderModule } from './layouts/header/header.module';
import { FooterModule } from './layouts/footer/footer.module';
import { LoginModule } from './shared/login/login.module';
import { SharedModule } from './shared/shared.module';
import { EntitiesModule } from './entities/entities.module';

@NgModule({
  declarations: [
    AppComponent,        
  ],
  imports: [
    BrowserModule,    
    HttpModule,    
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule.forRoot(),   //angular bootstrap           
    HeaderModule,
    FooterModule,
    LoginModule,
    SharedModule,
    EntitiesModule
  ],
  providers: [NgbActiveModal,   
    ],    
  bootstrap: [AppComponent],
  
})
export class AppModule { }
