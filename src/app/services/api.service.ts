/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://reqres.in/api/users';

  constructor(private Http: HttpClient) {

   }

   buscarUsuarios(page: number){
     return this.Http.get(`${this.url}?page=${page}`);
   }
}
