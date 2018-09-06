import { Component, OnInit } from '@angular/core';

//si deseo puedo importar las acciones del filtro
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  //filtros validos aceptados
  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos','completados','pendientes'];

  //para indicar cual filtrio esta selecciondo
  filtroActual: fromFiltro.filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe( state => {
      this.filtroActual = state.filtro;//obtengo el filtro actual seleccionado
    });
  }

  cambiarFiltro ( nuevoFiltro: fromFiltro.filtrosValidos ){

    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

}
