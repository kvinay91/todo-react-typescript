import React, { useState, ReactNode } from "react";
import Todo from "../models/Todo";

interface Props {
    children: ReactNode;
}
  

type todoContextObj = {
    items:Todo[];
    addTodo:(text:string) => void;
    removeTodo:(id:string) =>void;
}

export const todoContext =  React.createContext<todoContextObj>({
    items:[],
    addTodo:() => {},
    removeTodo:(id:string) => {}
});


const TodoContextProvider : React.FC<Props> = ({ children }) => {

    const [todo, setTodo] = useState<Todo[]>([]);
    const addTodoHandler = (todoText:string) =>{
      const newTodo = new Todo(todoText);
        setTodo((prevTodos) => {
          return prevTodos.concat(newTodo)
        }
      )
    }
  
    const removeTodoHandler = (todoID:string) =>{
        setTodo((prevTodos) =>{
          return prevTodos.filter(todo => todo.id !== todoID)
        })
    }

    const contextValue:todoContextObj = {
        items:todo,
        addTodo:addTodoHandler,
        removeTodo:removeTodoHandler
    };

    return <todoContext.Provider value={contextValue}>{children}</todoContext.Provider>
} ;

export default TodoContextProvider;