import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  getUserDetails() {
    return localStorage.getItem('userData')!==null ? JSON.parse(localStorage.getItem('userData')!) : null;
  }
  setDataInLocalStorage(variableName: string, data: string) {
    localStorage.setItem(variableName, data);
  }
  clearStorage() {
    localStorage.clear();
  }
}