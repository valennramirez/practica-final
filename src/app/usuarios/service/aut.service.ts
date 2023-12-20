import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AutService {

  constructor(private http : HttpClient) { }


  private url : string = 'http://localhost:4000/usuarios'; 
  private user! : User; 


  getUsuarios() : Observable <User[]>
  {
    return this.http.get<User[]>(this.url); 
  }

  logIn (user : User)
  {
    this.user = user; 
    localStorage.setItem('token', user.id.toString()); 
  }

  logOut ()
  {
    this.user!= undefined; 
    localStorage.clear(); 
  }

  get currentUser ()
  {
    return structuredClone(this.user); 
  }

  checkAutenticationStatus() : Observable<boolean>
  {

    const id = localStorage.getItem('token'); 

    if(!id){
      return of(false) 
    }

    return this.http.get<User>(`${this.url}/${id}`).pipe(
      tap(u => this.user = u), 
      map(u => !!u), 
      catchError(err => of(false))
    ); 

  }
}
