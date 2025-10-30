import { Store } from '@ngrx/store';
import { usuario } from '../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../stores/app-state';
import * as fromUsuariosAction from '../stores/usuarios/usuarios.actions'
import { Observable } from 'rxjs';
import * as fromUsuariosSelector from '../stores/usuarios/usuarios.reducer'

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
    
  listaUsuarios$: Observable<usuario[]> = this.store.select(fromUsuariosSelector.getUsuarios);
  
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios())
  }
}
