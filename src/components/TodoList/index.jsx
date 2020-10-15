import React from 'react';
import TodoItem from '../TodoItem';

function TodoList(props) {
  const {todos} = props;
  const {deleteTodo} = props;
  
  return (
    <div>
      <TodoItem todos={todos} deleteTodo={props.deleteTodo} />
      
    </div>
  );
}

export default TodoList;
