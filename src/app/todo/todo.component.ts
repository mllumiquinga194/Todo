import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAction } from './todo.actions';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){

    this.completado = !this.completado;
    
    //creo mi accion
    const accion = new ToggleAllTodoAction ( this.completado );
    this.store.dispatch( accion );
     
  }

}
