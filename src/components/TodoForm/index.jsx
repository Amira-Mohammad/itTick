import React, { Component } from 'react';
import styles from './styles.module.sass';
class TodoForm extends Component {
  state = {
   
      todo : ""
      
    
  }
  hadleChange =(e)=> {
    this.setState({
      [e.target.id]:e.target.value
    })
    console.log("onChangeddd")
  }

  handleSubmit =(e)=> {
    e.preventDefault();
     this.props.addTodo(this.state.todo)
     
     this.setState({
       todo:''
     })
   

  }

  render() {  
    return (
      <form onSubmit={this.handleSubmit} className="d-flex">
        <input
          id="todo"
          type="text"
          placeholder="What do you have to do?"
          className={styles.input}
          onChange={this.hadleChange}
          value={this.state.todo}

        />
        <input type="submit" className={styles.input} />

      </form>
    );
  }
}

export default TodoForm;