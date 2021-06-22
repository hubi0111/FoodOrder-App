import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);
  }

  deleteUser(id: string | number) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }

  authenticate(data: any) {
    return this.httpClient.post<number>('http://localhost:8080/users/login', data)
  }

  authorize(user: User, role: string) {
    const data = { "user": user, "role": role }
    console.log(data);
    return this.httpClient.post<boolean>('http://localhost:8080/users/authorize', data)
  }
}
