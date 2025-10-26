import { Action, createReducer, on } from "@ngrx/store";
import { usuario } from "src/app/models/usuario.model";
import * as fromUsuariosAction from "../usuarios/usuarios.actions"

export interface UsuariosState {
    usuarios: usuario[],
    usuario: usuario | null,
    error: string | ''
}

export const initialState: UsuariosState = {
    usuarios: [],
    usuario: null,
    error: ''
}

const _usuariosReducer = createReducer(
    initialState, 
    on(fromUsuariosAction.LoadUsuariosSuccess, (state, {payload})=>({...state, usuarios: payload, error: ''})),
    on(fromUsuariosAction.LoadUsuariosFail, (state, {error})=>({...state, error: error})),

    on(fromUsuariosAction.LoadUsuarioSuccess, (state, {payload})=>({...state, usuario: payload, error: ''})),
    on(fromUsuariosAction.LoadUsuarioFail, (state, {error})=>({...state, error: error})),

    on(fromUsuariosAction.createUsuarioSuccess, (state, {payload})=>({...state, usuarios: [...state.usuarios, payload], error: ''})),
    on(fromUsuariosAction.createUsuarioFail, (state, {error})=>({...state, error: error})),
    
    on(fromUsuariosAction.updateUsuarioSuccess, (state, {payload})=>({
        ...state, 
        usuarios: [...state.usuarios].map((row)=>{
            if (row.id == payload.id){
                return payload;
            } else {
                return row;
            }
        }), 
        error: ''
    })),
    on(fromUsuariosAction.updateUsuarioFail, (state, {error})=>({...state, error: error})),

    on(fromUsuariosAction.deleteUsuarioSuccess, (state, {payload})=>({
        ...state, 
        usuarios: [...state.usuarios].filter((filter)=> filter.id != payload), 
        error: ''
    })),
    on(fromUsuariosAction.deleteUsuarioFail, (state, {error})=>({...state, error: error}))
)


export function usuariosReducer(state = initialState, action: Action) {
    return _usuariosReducer(state, action)
}