import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GlobalApp } from '../global'
import { UserService } from '../service/user.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

    constructor(private router: Router,
        public app: GlobalApp,) { }

    canActivate(): boolean {
        if (this.app.localStorageItem('userData') !== 'admin') {
            console.log('not authorized');
            this.router.navigate(['/restricted']);
            return false;
        }
        console.log('authorized')
        return true;
    }


}