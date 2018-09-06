import { Action } from "@ngrx/store";

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';

export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;
    constructor( public texto:string ) {}//esta accion recibe un texto
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODO;
    constructor( public id: number ) {}//Recibo el ID del TODO que necesito cambiar
}

export class EditarTodoAction implements Action{
    readonly type = EDITAR_TODO;
    constructor( public id: number,
                public texto:string ) {}//Recibo el ID del TODO que necesito cambiar
}

export class BorrarTodoAction implements Action{
    readonly type = BORRAR_TODO;
    constructor( public id: number ) {}//Recibo el ID del TODO que necesito cambiar
}

export type Acciones = AgregarTodoAction |
                        ToggleTodoAction |
                        EditarTodoAction |
                        BorrarTodoAction;
