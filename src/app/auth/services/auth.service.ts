import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of, map, catchError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private user?:User;

  constructor(private http: HttpClient){}

  get loggedUser(): User|undefined{

    if( !this.user ) return undefined;
    return structuredClone( this.user );
    
  }

  login( email:string, password: string):Observable<User>{
    return this.http.get<User>("http://localhost:4300/users/1")
    .pipe(
      tap( user=> this.user = user),
      tap( user=>localStorage.setItem('token',"ajkj45kjsnd"))
    )
  }

  checkAuthentication(): Observable<boolean> | boolean {
    if( !localStorage.getItem('token') ) return false;

    const token = localStorage.getItem('token');

    return this.http.get<User>("http://localhost:4300/users/1")
    .pipe(
      tap( user => this.user = user),
      map( user => !!user ),
      catchError(err=>of(false))
    )
  }

  logout(){
    this.user = undefined;
    localStorage.clear()
  }
}
