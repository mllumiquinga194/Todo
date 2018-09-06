import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtrosValidos = 'todos';

export function filtroReducer( state = estadoInicial, action: fromFiltro.acciones ): fromFiltro.filtrosValidos{//mi reducer siempre va a regresar algo de tipo string de todos, completados o pendientes.

    switch ( action.type ) {
        case fromFiltro.SET_FILTRO:
            return action.filtro;
    
        default:
        return state;
    }
}