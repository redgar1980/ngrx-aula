import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsuarioService } from "src/app/repositories/usuario.service";
import * as fromUsuariosAction from "./usuarios.actions"
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class UsuariosEffects {

    constructor(private $actions: Actions, private usuariosService: UsuarioService ) { }

    loadUsuarios$ = createEffect(
        () => this.$actions.pipe(
            ofType(fromUsuariosAction.usuariosTypeAction.LOAD_USUARIOS),
            exhaustMap(()=>this.usuariosService.getUsuarios()
                .pipe(
                    map(payload =>
                        fromUsuariosAction.LoadUsuariosSuccess({payload}),
                        catchError(error => of(fromUsuariosAction.LoadUsuariosFail({error})))
                    )
                )        
            )
        )    
    )

    createUsuario$ = createEffect(
        () => this.$actions.pipe(
            ofType(fromUsuariosAction.usuariosTypeAction.CREATE_USUARIO),
            exhaustMap((record: any)=>this.usuariosService.addUsuario(record.payload)
                .pipe(
                    map(payload =>
                        fromUsuariosAction.createUsuarioSuccess({payload}),
                        catchError(error => of(fromUsuariosAction.createUsuarioFail({error})))
                    )
                )        
            )
        )    
    )

    updateUsuario$ = createEffect(
        () => this.$actions.pipe(
            ofType(fromUsuariosAction.usuariosTypeAction.UPDATE_USUARIO),
            exhaustMap((record: any)=>this.usuariosService.updateUsuario(record.payload)
                .pipe(
                    map(payload =>
                        fromUsuariosAction.updateUsuarioSuccess({payload}),
                        catchError(error => of(fromUsuariosAction.updateUsuarioFail({error})))
                    )
                )        
            )
        )    
    )

    deleteUsuario$ = createEffect(
        () => this.$actions.pipe(
            ofType(fromUsuariosAction.usuariosTypeAction.DELETE_USUARIO),
            exhaustMap((record: any)=>this.usuariosService.deleteUsuario(record.payload)
                .pipe(
                    map(() =>
                        fromUsuariosAction.deleteUsuarioSuccess({payload: record.payload}),
                        catchError(error => of(fromUsuariosAction.deleteUsuarioFail({error})))
                    )
                )        
            )
        )    
    )

}