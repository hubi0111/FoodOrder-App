import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalApp } from '../global'
import { UserService } from '../service/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        public app: GlobalApp,
        public userService: UserService) { }

    canActivate(): Observable<boolean> {
        // if (this.app.localStorageItem('userData') === null) {
        //     console.log('not authenticated');
        //     this.router.navigate(['/login']);
        //     return false;
        // }
        // console.log('accepted')
        // return true;
        return this.userService.authorize(this.app.localStorageItem('userData'), 'user');
    }
}


