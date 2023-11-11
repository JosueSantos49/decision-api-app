import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/Usuario';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    //Url da APISERVE (Back-end)
    private url:string = 'http://localhost:8080';

    PATH_API_AUTH = '/api';

  constructor(private httpClient: HttpClient) { }

  lista() {
    console.log(this.httpClient.get<Usuario[]>(this.url + this.PATH_API_AUTH + '/lista-usuarios', {responseType:"json"}));
    return this.httpClient.get<Usuario[]>(this.url + this.PATH_API_AUTH + '/lista-usuarios', {responseType:"json"})
    .pipe(
     first(),
     tap(usuarios => console.log('lista usuarios: ',usuarios))
    );
  }

  salvar(registro: Partial<Usuario>) {
    return this.httpClient.post<Usuario>(this.url + this.PATH_API_AUTH + '/criar-usuario', registro, {responseType:"json"}).pipe(first());
  }

}
