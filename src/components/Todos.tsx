import React, {useContext} from "react";
import TodoItem from "./TodoItems"
import classes from './Todos.module.css'
import { todoContext } from "../store/todo-context";

const Todos : React.FC = () => {
    const todosCnx = useContext(todoContext);
    return (
        <ul className={classes.todos}>
           { todosCnx.items.map((item) => (
            <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCnx.removeTodo.bind(null, item.id)}/>
           ))}
        </ul>
    );
} 

export default Todos;