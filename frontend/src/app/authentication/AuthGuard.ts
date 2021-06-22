import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GlobalApp } from '../global'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        public app: GlobalApp,) { }

    canActivate(): boolean {
        if (this.app.localStorageItem('userData') === null) {
            console.log('not authenticated');
            this.router.navigate(['/login']);
            return false;
        }
        console.log('accepted')
        return true;
    }
}


