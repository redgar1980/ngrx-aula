import { createAction, props } from "@ngrx/store";
import { usuario } from "src/app/models/usuario.model";

export const enum usuariosTypeAction {
    LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
    LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
    LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

    LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
    LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
    LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

    CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
    CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS',
    CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',

    UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
    UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE USUARIO SUCCESS',
    UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL',

    DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
    DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE USUARIO SUCCESS',
    DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL',
}

//load usuarios
export const LoadUsuarios = createAction(
    usuariosTypeAction.LOAD_USUARIOS
);

export const LoadUsuariosSuccess = createAction(
    usuariosTypeAction.LOAD_USUARIOS_SUCCESS,
    props<{payload: usuario[]}>()
);

export const LoadUsuariosFail = createAction(
    usuariosTypeAction.LOAD_USUARIOS_FAIL,
    props<{error: string}>()
);

//load usuario
export const LoadUsuario = createAction(
    usuariosTypeAction.LOAD_USUARIO,
    props<{payload: number}>()
);

export const LoadUsuarioSuccess = createAction(
    usuariosTypeAction.CREATE_USUARIO_SUCCESS,
    props<{payload: usuario}>()
);

export const LoadUsuarioFail = createAction(
    usuariosTypeAction.CREATE_USUARIO_FAIL,
    props<{error: string}>()
);

//Create usuario
export const createUsuario = createAction(
    usuariosTypeAction.CREATE_USUARIO,
    props<{payload: usuario}>()
);

export const createUsuarioSuccess = createAction(
    usuariosTypeAction.CREATE_USUARIO_SUCCESS,
    props<{payload: usuario}>()
);

export const createUsuarioFail = createAction(
    usuariosTypeAction.CREATE_USUARIO_FAIL,
    props<{error: string}>()
);

//Update usuario
export const updateUsuario = createAction(
    usuariosTypeAction.UPDATE_USUARIO,
    props<{payload: usuario}>()
);

export const updateUsuarioSuccess = createAction(
    usuariosTypeAction.UPDATE_USUARIO_SUCCESS,
    props<{payload: usuario}>()
);

export const updateUsuarioFail = createAction(
    usuariosTypeAction.UPDATE_USUARIO_FAIL,
    props<{error: string}>()
);

//Delete usuario
export const deleteUsuario = createAction(
    usuariosTypeAction.DELETE_USUARIO,
    props<{payload: number}>()
);

export const deleteUsuarioSuccess = createAction(
    usuariosTypeAction.DELETE_USUARIO_SUCCESS,
    props<{payload: number}>()
);

export const deleteUsuarioFail = createAction(
    usuariosTypeAction.DELETE_USUARIO_FAIL,
    props<{error: string}>()
);