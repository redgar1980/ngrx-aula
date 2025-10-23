import { usuario } from '../models/usuario.model';
import { UsuarioService } from './../repositories/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios: usuario[]) => {
      this.listaUsuarios = usuarios;
    });
  }
}
