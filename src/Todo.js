import React, { useState } from "react";

function Todo({ todo, handleRemove, id, update }) {

    //if the todo is going to be editable then it needs some state
    //initialize whatever todo we're going to edit to whatever its current form is
    const [editTodo, setEditTodo] = useState(todo);

    //we also need to know if the todo is currently BEING edited
    //this requires its own state so we can switch back and forth between
    //editing and not editing
    const [editing, setEditing] = useState(false);

    //create a function that will set editing to true to use on Edit button
    const isEditing = () => {
        setEditing(() => true)
    }

    //create a hadnle change function for changing state of Todo
    const handleChange = (e) => {
        console.log("chaaaaaaange")
        setEditTodo(e.target.value)
    }

    //handle submitting updated Todo
    const handleUpdate = (e) => {
        e.preventDefault();
        //on submit update the Todo
        update(id, editTodo);
        setEditing(false);
    } 

    const remove = () => {
        handleRemove(id) 
    }    

  //store our Todo jsx in a variable so we can check if it is being edited
  let jsx = (
    <div>
      <li>{todo}</li>
      <button onClick={isEditing}>Edit</button>
      <button onClick={remove}>X</button>
    </div>
  );

  if(editing) {
      jsx = (
        <div>
         <form onSubmit={handleUpdate}>
          <input type="text" value={editTodo} onChange={handleChange} />
          <button>Enter</button>
         </form>
      </div>
      )
  }

  return jsx;
}

export default Todo;
