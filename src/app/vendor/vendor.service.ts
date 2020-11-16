import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:8080/api/vendors";
@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Vendor[]>
  {
    return this.http.get(`${baseurl}/`) as Observable<Vendor[]>;
  }
  
  get(id: number): Observable<Vendor>
  {
    return this.http.get(`${baseurl}/${id}`) as Observable<Vendor>;
  }

  add(vendor: Vendor): Observable<Vendor>
  {
    return this.http.post(`${baseurl}/`, vendor) as Observable<Vendor>;
  }

  edit(vendor: Vendor): Observable<Vendor>
  {
    return this.http.put(`${baseurl}/${vendor.id}`, vendor) as Observable<Vendor>;
  }

  delete(vendor: Vendor): Observable<Vendor>
  {
    return this.http.delete(`${baseurl}/${vendor.id}`) as Observable<Vendor>;

  }
}
