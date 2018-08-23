import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {    
  loginFormGroup: FormGroup;


  constructor(private user: User,
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.user.Username = null;
      this.user.Password = null;
      this.user.IsAuthenticated = false;
      
      this.createForm();
    }

  ngOnInit() {
  }

  createForm() {
    this.loginFormGroup = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  rebuildForm() {
  this.loginFormGroup.reset({
    username: null,
    password: null
  });
}

  login(){
    this.user.Username = this.loginFormGroup.get('username').value;
    this.user.IsAuthenticated = true;    
    this.router.navigate(['/home']);
  }
}
