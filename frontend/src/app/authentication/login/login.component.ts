import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    this.httpClientService.authenticate(form.value).subscribe((response: any) => {
      console.log(response)
      if (response[0] === 200) {
        this._auth.setDataInLocalStorage('userData', JSON.stringify(response[1]));
        this._router.navigate(['']);
      } else {
      }
    }, err => {
      this.errorMessage = err['error'].message;
    });
  }
  isUserLogin() {
    console.log(this._auth.getUserDetails())
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }
  logout() {
    localStorage.clear();
    this._auth.clearStorage()
    this._router.navigate(['']);
  }
}