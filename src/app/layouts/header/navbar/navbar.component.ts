import { Component, OnInit } from '@angular/core';
import { User } from "src/app/shared/model/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private user: User) { }

  ngOnInit() {
    
  }

}
