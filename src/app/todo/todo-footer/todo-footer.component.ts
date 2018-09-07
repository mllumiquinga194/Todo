import { Component, OnInit } from '@angular/core';

//si deseo puedo importar las acciones del filtro
import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  //filtros validos aceptados
  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos','completados','pendientes'];

  //para indicar cual filtro esta selecciondo
  filtroActual: fromFiltro.filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe( state => {
      this.filtroActual = state.filtro; //obtengo el filtro actual seleccionado
      this.contarPendientes( state.todos );//para contar los pendientes
    });
  }

  cambiarFiltro ( nuevoFiltro: fromFiltro.filtrosValidos ){

    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos:Todo[]){//para contar las tareas no completadas o pendientes.
    this.pendientes = todos.filter( todo => !todo.completado).length;//sin el length me devuelve un arregle nuevo de todos pero con el length me devuelve el numero de todosque no estan completados
  }

  borrarTodo(){
    const accion = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch( accion );
  }

}
