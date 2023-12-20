import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  private url : string = 'http://localhost:4000/usuarios'; 

  getUsuarios() : Observable <User[]>
  {
    return this.http.get<User[]>(this.url); 
  }
}
