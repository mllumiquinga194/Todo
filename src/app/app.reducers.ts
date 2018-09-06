//DEFINIR EL ESTADO DE MU APLICACION.

import { Todo } from './todo/model/todo.model';

export interface AppState{
    todos: Todo[];//una lista de todo
}