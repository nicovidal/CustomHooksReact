import { useEffect, useReducer } from 'react';
import { todoReducer } from "../todoReducer";

const initialState = [];

const init=()=>{
    return JSON.parse(localStorage.getItem('todos'))||[];
}
export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo=(todo)=>{
        const action={
            type:'[TODO] Add todo',
            payload:todo
        }
        //se crea la accion y se manda con el dispatch
        dispatch(action);
    };


    const handleDeleteTodo=(id)=>{
        dispatch({
            type:'[TODO] Remove Todo',
            payload:id
        })
    };

    const handleToggleTodo=(id)=>{
        dispatch({
            type:'[TODO] Toggle Todo',
            payload:id
        })
    }

    //devolver como un objeto para poder destructurar
  return {
    todos,
    todosCount:todos.length,
    pendingTodoCount:todos.filter(todo=>!todo.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo
  }
}
