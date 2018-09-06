import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;//esto es igual a hacer una seleccion de jQuery. de esta forma lo hago en angular. 

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.chkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    this.chkField.valueChanges.subscribe( () => {
      //creo mi accion
      const accion = new ToggleTodoAction ( this.todo.id );
      this.store.dispatch( accion );
    });
    
  }

  editar(){
    this.editando = true;
    setTimeout( ()=> {
      this.txtInputFisico.nativeElement.select();//ya que esta linea se ejecuta demasiado rapido, antes de que se active el elemento, entonces lo meto en esta funcion para retrasarla un milisegundo
    },1);
  }

  terminarEdicion(){
    this.editando = false;
  }

}
