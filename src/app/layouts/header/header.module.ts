import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';

import { HeaderRoutingModule} from './header-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  declarations: [HeaderComponent, NavbarComponent, TopbarComponent],
  exports: [HeaderComponent, NavbarComponent, TopbarComponent]
})
export class HeaderModule { }
