import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  httpOptions = {};

  constructor(private http: HttpClient) { }

  getServices() {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }

    return this.http.get<HttpResponse<object>>('' + "/ld9e74a2a463b4306b2269 ", this.httpOptions)
  }
  
}
