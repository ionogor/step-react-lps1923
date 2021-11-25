import React from "react";

const Todo = ({ todo, markComleted }) => {
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => markComleted(todo.id)}
        />
        {todo.text}
      </div>
    </>
  );
};

export default Todo;
