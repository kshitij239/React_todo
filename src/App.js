import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  const[ inputText , setInputText ] = useState(" ");
  const[ todos, setTodos] = useState([]);
  const[ status, setStatus] = useState("all");
  const[filteredtodos, setFilteredtodos] = useState([]);

  useEffect (() => {
    const filterHandler = () =>{
    switch(status){
      case "completed" :
        setFilteredtodos(todos.filter(todo => todo.completed === true))
        break;
        case "incomplete" :
          setFilteredtodos(todos.filter(todo => todo.completed === false))
          break;
          default :
          setFilteredtodos(todos);
          break;
      }
  }  
    filterHandler();
  },[todos, status]);

  
  return (
    <div className="App">
      <header>
      <h1>Kshitij's to do list </h1>
      </header>
      <Form 
       inputText={inputText}
       todos={todos}
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}/>
      <TodoList
       filteredtodos={filteredtodos}
       todos={todos} 
       setTodos={setTodos} />
     </div>
  );
}

export default App;
