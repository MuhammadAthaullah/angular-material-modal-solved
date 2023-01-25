import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  apiURL: string = 'https://637e1e5d9c2635df8f9993a9.mockapi.io';

  constructor(private http: HttpClient) {}

  public getAccountTypes(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/accountType`);
  }
}
