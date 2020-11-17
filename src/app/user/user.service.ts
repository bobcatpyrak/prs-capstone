import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:8080/api/users";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<User>
  {
    return this.http.get(`${baseurl}/${username}/${password}`) as Observable<User>;
  }

  list(): Observable<User[]>
  {
    return this.http.get(`${baseurl}/`) as Observable<User[]>;
  }
  
  get(id: number): Observable<User>
  {
    return this.http.get(`${baseurl}/${id}`) as Observable<User>;
  }

  add(user: User): Observable<User>
  {
    return this.http.post(`${baseurl}/`, user) as Observable<User>;
  }

  edit(user: User): Observable<User>
  {
    return this.http.put(`${baseurl}/${user.id}`, user) as Observable<User>;
  }

  delete(user: User): Observable<User>
  {
    return this.http.delete(`${baseurl}/${user.id}`) as Observable<User>;
  }
}
