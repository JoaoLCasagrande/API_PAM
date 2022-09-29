/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  page;
  perPage;
  total;
  totalPage;
  data;

  constructor( private apiService: ApiService) {this.buscarTodos()}

  buscarTodos(page=1){
    this.apiService.buscarUsuarios(page).subscribe(retorno => {
      console.log(retorno);
      this.page = retorno['page'];
      this.perPage = retorno['per_page'];
      this.total = retorno['total'];
      this.totalPage = retorno['total_page'];
      this.data = retorno['data'];
    });
  }

}
