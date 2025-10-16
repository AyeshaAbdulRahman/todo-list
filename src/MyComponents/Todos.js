import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"

    }

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
                <>
              <Todo
                todo={todo}
                onDelete={props.onDelete}
                key={todo.sno}
                
              />
              <hr></hr>
              </>
            );
          })}
    </div>
  );
}

export default Todos;
