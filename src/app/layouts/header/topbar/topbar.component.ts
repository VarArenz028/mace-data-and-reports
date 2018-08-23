import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from "src/app/shared/model/user";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private user: User,
    private router: Router) { }

  ngOnInit() {
    
  }

  logout(){
    this.user.IsAuthenticated = false;
    this.router.navigate(['/home']);
  }
}
