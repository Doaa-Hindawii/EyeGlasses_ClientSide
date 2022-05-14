import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser} from '../Models/LoginUser';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url_Register='https://localhost:44339/api/Auth/Register?isAdmin=false';
  url_Login='https://localhost:44339/api/Auth/Login';
  url_confirm="https://localhost:44339/api/Auth/EmailConfrimation";
  url_reset='https://localhost:44339/api/Auth/ResetPassword';
  url_user='https://localhost:44339/api/Users/GetUserByEmail';
  url_userName='https://localhost:44339/api/Users/GetUserByUserName';
  ngOnInit() {          
  }
  registerUser(user : User)
  {
    return this.http.post(this.url_Register,user);
  }
  loginUser(loginuser : LoginUser)
  {
    return this.http.post(this.url_Login,loginuser);
  }
  getUserByEmail(email: string): Observable<any> { 
    return this.http.get(`${this.url_user}/${email}`);
  }
  getIdByUserName(userName: string) { 
    return this.http.get(`${this.url_userName}/${userName}`);
  }
}