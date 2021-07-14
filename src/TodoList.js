import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  //todo state initialized as empty array
  const [todos, setTodos] = useState([]);

  //add a new todo
  const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  //create a remove function for the onClick handler on Todo component
  const handleRemove = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
  }

  //update function for editing our Todo
  const update = (id, editedTodo) =>{
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, todo: editedTodo} : todo));
  }
  
  //map over current array of todos and render a Todo component for each
  const todoComponents = todos.map(todo => (
    <Todo     
      key={todo.id}
      id={todo.id}
      todo={todo.todo}
      handleRemove={handleRemove}
      update={update}      
    />
  ));

  return (
    <div>
      <NewTodoForm createTodo={create} />
      <ul>{todoComponents}</ul>
    </div>
  );
}

export default TodoList;

