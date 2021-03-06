import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './request.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:8080/api/requests";
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  requests(id: number): Observable<Request[]>
  {
    return this.http.get(`${baseurl}/reviews/${id}`) as Observable<Request[]>;
  }

  review(r: Request): Observable<Request>
  {
    return this.http.put(`${baseurl}/review`, r) as Observable<Request>;
  }

  approve(r: Request): Observable<Request>
  {
    return this.http.put(`${baseurl}/approve`, r) as Observable<Request>;
  }

  reject(r: Request): Observable<Request>
  {
    return this.http.put(`${baseurl}/reject`, r) as Observable<Request>;
  }

  list(): Observable<Request[]>
  {
    return this.http.get(`${baseurl}/`) as Observable<Request[]>;
  }
  
  get(id: number): Observable<Request>
  {
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }

  add(request: Request): Observable<Request>
  {
    return this.http.post(`${baseurl}/`, request) as Observable<Request>;
  }

  edit(request: Request): Observable<Request>
  {
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<Request>;
  }

  delete(request: Request): Observable<Request>
  {
    return this.http.delete(`${baseurl}/${request.id}`) as Observable<Request>;

  }
}
