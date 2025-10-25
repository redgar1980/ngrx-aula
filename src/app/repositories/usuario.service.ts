import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuario } from '../models/usuario.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<usuario[]>('http://localhost:3000/usuarios');
  }

  getUsuario(id: number) {
    return this.http.get<usuario>('http://localhost:3000/usuarios' + id);
  }

  addUsuario(record: usuario) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<usuario>(
      'http://localhost:3000/usuarios',
      JSON.stringify(record),
      { headers: headers }
    );
  }

  updateUsuario(record: usuario) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<usuario>(
      'http://localhost:3000/usuarios/' + record.id,
      JSON.stringify(record),
      { headers: headers }
    );
  }

  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<usuario>('http://localhost:3000/usuarios/' + id, { headers: headers });
  }
}
