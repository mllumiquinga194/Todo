import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe( state => {//recibo el state completo de la aplicacion

      this.todos = state.todos;//todos los elementos que se encuentren en el state, los guardo en todos: Todo[] = [];
    });
  }

}
