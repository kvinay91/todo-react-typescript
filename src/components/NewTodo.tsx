import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { todoContext } from '../store/todo-context';

const NewTodo:React.FC = () =>{

    const todosCnx =  useContext(todoContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const formSubmitHandler = (event:React.FormEvent) =>{
        event.preventDefault();

        const enteredText =  todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            return;
        }
        todosCnx.addTodo(enteredText);
        todoTextInputRef.current!.value = '';
    }

    return <form onSubmit={formSubmitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id='text' ref={todoTextInputRef}/>
        <button type='submit'>Add Todo</button>
    </form>
}

export default NewTodo;