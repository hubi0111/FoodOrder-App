import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  constructor(
    private httpClientService: UserService,
    private _auth: AuthService,
    private _router: Router
  ) { }
  ngOnInit() {
    this.isUserLogin();
  }
  onSubmit(form: NgForm) {
    this.httpClientService.addUser(form.value).subscribe();
  }
  isUserLogin() {
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }
}