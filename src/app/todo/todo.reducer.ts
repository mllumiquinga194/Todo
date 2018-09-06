import * as fromTodo from './todo.actions';//exporto todo lo que esta exportado en el archivo todo.actions
import { Todo } from './model/todo.model';

const todo1 = new Todo('Cenar Temprano');
const todo2 = new Todo('Comprar Huevos');
const todo3 = new Todo('Levantarme Temprano');

todo2.completado = true;


const estadoInicial: Todo[] = [todo1, todo2, todo3];
export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {//mi reducer siempre va a regresar una lista de todo. cada return del shiwch debe ser una lista de todo

    switch (action.type) {

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);//action.texto es lo que lo quiero hacer
            // state.push(todo);//en teoria esto seria todo porque estamos agregando el nuevo estado pero cuando lo hacemos asi estamos mutando el estado actual y esto pasa por referencia. en teoria de esta manera jamas se podra rastrear los cambios realizados por las acciones. por lo cual hay que regresar un nuevo arreglo de todo's. que sirva de estado. para esto uso es6 y el operador 
            return [...state, todo];//aqui esto devolviendo un arreglo nuevo, le agrego lo que tenia el state mas el todo nuevo.. cuando hago esto estoy clonando el state actual, estoy mandando todos los elementos del state de forma independiente, esto es un nuevo arreglo.

        case fromTodo.TOGGLE_TODO:
            //ejemplo de como se usa MAP
            // var numbers = [1, 5, 10, 15];
            // var doubles = numbers.map(function (x) {
            //     return x * 2;
            // });
            // doubles is now [2, 10, 20, 30]
            // numbers is still [1, 5, 10, 15]
            //el map funciona como un foreach. todoEdit es cada item de ese nuevo arreglo porque SIEMPRE debo devolver un nuevo estado, SIEMPRE.
            return state.map(todoEdit => { //el operador map barre todo el arreglo

                if (todoEdit.id === action.id) {//si esto es igual, edito el "completado"
                    //dentro del elemento map, siguen siendo objetos pasados por referencia, por lo cual no seria posible darle un seguimiento a los cambios de estado, no puedo hacer esto:
                    //todoEdit.completado = true; esto no lo puedo hacer, debo hacerlo de otra forma. asi lo debo hacer:
                    //retornando un nuevo objeto de tipo todo.
                    return {
                        ...todoEdit, //aqui clono el resto de propiedades, el no clona las que yo explicitamente edito.
                        completado: !todoEdit.completado //completado sera lo opuesto a lo que tenia todoEdit.completado
                    };
                } else {//si no es el mismo, mando el mismo elemento porquie no va a cambiar.
                    //todos los returns son los nuevos elementos que van a conformar el nuevo state, por eso, sea que coincida o no, debo mandarlos para que el operador map me genere o construya ese nuevo arreglo de state's
                    return todoEdit;//no puedo mutar la informacion anterior porque nsino no va a ser posible regresar a estados anteriores.
                }
            });
        
        case fromTodo.EDITAR_TODO:
            return state.map(todoEdit => { //el operador map barre todo el arreglo

                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.BORRAR_TODO:
        //el filter me regresa un nuevo arreglo con la condicion de que no estara el todo con id igual al action.id
            return state.filter( todoEdit => todoEdit.id !== action.id );
        default:
            return state;
    }
}