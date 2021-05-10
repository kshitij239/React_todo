import React from 'react';
//importing components
import Todo from './Todo.js';


const TodoList = ({ todos ,setTodos, filteredtodos }) =>{
    return(
        <div className ="todo-container">
            <ul className = "todo-list">
                {filteredtodos.map((todo) =>(
                    <Todo 
                    todo={todo}
                    todos={todos} 
                    setTodos={setTodos}
                    text ={todo.text} 
                    key={todo.id} 
                     />
                ))}
             </ul>
        </div>
    );
};

export default TodoList;