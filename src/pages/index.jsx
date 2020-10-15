import React, { Component } from 'react';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';


class index extends Component {
  state ={
   Todos:[
     {id :1 , todo : "Amira" , complete :false},
     {id :2 ,todo : "Aya", complete :false},
     {id :3 ,todo : "Doaa", complete :false},
     {id :4 ,todo : "Doaa", complete :false}
   ]
  }
 
  deleteTodo = (id) =>{
    // let todos = this.state.Todos.filter(todo=>{
    //   return todo.id !== id 
    // })
    // this.setState({todos})
     let todos = this.state.Todos;
     let deletedTodo = todos.findIndex(todo =>todo.id === id)
     todos.splice(deletedTodo,1)
     this.setState({todos})
  }
   switchComplete = (id) =>{
      let todos = this.state.Todos;
      let switchCompleted = todos.findIndex(todo =>todo.id === id)
      this.setState({todos})
   }
  addTodo = (todo) =>{
     
    let todosss=this.state.Todos;
    let newID = todosss.length +1 ;
    todosss.push({id: newID ,todo : todo , complete:false})
    this.setState({Todos:todosss})
     console.log("added" , this.state)
  }
 
  render() {
    return (
      <main>
      <Header />
      <ContentContainer>
        <TodoForm  addTodo={this.addTodo} />
        <TodoList todos={this.state.Todos}  deleteTodo={this.deleteTodo} switchComplete={this.switchComplete}/>
      </ContentContainer>
    </main>
    );
  }
}

export default index;