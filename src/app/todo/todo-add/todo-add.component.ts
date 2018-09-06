import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;//defino un formulario

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('',Validators.required);
  }

  agregarTodo(){
    if(this.txtInput.invalid){
      return;
    }

    const accion = new fromTodo.AgregarTodoAction( this.txtInput.value );//estoy llamando al clase y le estoy mandadndo el valor que tiene la caja de texto
    this.store.dispatch( accion );

    this.txtInput.setValue('');//para vaciar el input despues de darle enter
  }

}
