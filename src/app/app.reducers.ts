//DEFINIR EL ESTADO DE MU APLICACION.

import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

//importo mis reducers
import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducers';

//si deseo puedo importar las acciones del filtro
import * as fromFiltroActions from './filter/filter.actions';

export interface AppState{
    todos: Todo[];//una lista de todo
    filtro: fromFiltroActions.filtrosValidos;//una lista de strings validos para mi filtro
}

//aqui terngo todos mis reducers para exportarlos en una sola constante al app.module
export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
}