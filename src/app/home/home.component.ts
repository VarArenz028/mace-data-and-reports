import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

import { User} from '../shared/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()]
})
export class HomeComponent implements OnInit {

  constructor(private user: User) { }

  ngOnInit() {
    // this.loginService.notifyObservable$.subscribe((res) => {
    //   if (res.hasOwnProperty('option') && res.option.toUpperCase() === 'USER-IS-AUTHENTICATED') {              
    //     this.user.IsAuthenticated = true;
    //   // } else if (res.hasOwnProperty('option') && res.option.toUpperCase() === 'READ-DATA') {                        
    //   //   this.readData();      
    //   }            
    // });   
  }
}
