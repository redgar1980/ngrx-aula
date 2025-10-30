import { Component, OnInit } from '@angular/core';
import { usuario } from '../models/usuario.model';
import { AppState } from '../stores/app-state';
import { Store } from '@ngrx/store';
import * as fromUsuariosAction from '../stores/usuarios/usuarios.actions'

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {
  
  //model: usuario = { id: 0, nome: '', idade: 0, perfil: ''};
  model: usuario = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private store: Store<AppState>) {  }
  
  ngOnInit(): void {
    let i = 1;// PARA DAR ERRO NO CONSOLE
  }

  addUsuario() {
    if(this.model.id == 0){
      // cadastrar
      console.log('Cadastrar', this.model)
      this.store.dispatch(fromUsuariosAction.createUsuario({payload: this.model}))
    } else {
      // atualizar
      console.log('atualizar', this.model)
    }
  }

}
