import React from 'react';
import styles from './styles.module.sass';

function TodoItem(props) {
  const { todos } = props; 
  const { deleteTodo } = props;
  let todoLength = todos.length;
 

  let renderedTodos = todoLength ?(
    [...props.todos].map((todo) => {
      return (
        <div className="d-flex justify-content-between py-2" key={todo.id}>
          <span className="d-flex flex-column justify-content-center">{todo.todo}</span>
          {todo.complete ? <span>completed</span>: null}
          
          <div>
          <button className={styles.completeBtn}>Complete</button>
          <button onClick={()=>{deleteTodo(todo.id)}} className={styles.deleteBtn}>Delete</button>
          </div>
        </div>
      )
    })
  ):(<div>No Available Todos</div>)
    
 

  return (
    <div className={styles.card}>
      {renderedTodos}
      {/* <h2 className={styles.title}>Title</h2>
      <button className={styles.completeBtn}>Complete</button>
      <button className={styles.deleteBtn}>Delete</button> */}
    </div>
  );
}

export default TodoItem;
