import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../repositories/usuario.service';
import { usuario } from '../models/usuario.model';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {
  
  model: usuario = { id: 0, nome: '', idade: 0, perfil: ''};

  constructor(private usuarioService: UsuarioService) {  }
  
  ngOnInit(): void {
    let i = 1;// PARA DAR ERRO NO CONSOLE
  }

  addUsuario() {
    if(this.model.id == 0){
      // cadastrar
      console.log('Cadastrar', this.model)
      this.usuarioService.addUsuario(this.model).subscribe()
    } else {
      // atualizar
      console.log('atualizar', this.model)
    }

  }

}
