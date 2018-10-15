import React, { Component } from 'react';
import AddTodo from './AddTodo.js'
import Todo from './Todo.js'


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
        return todo.id !== id
    });
    this.setState({
      todos: todos
    })
    console.log("fires up: deleteTodo " + todos)
  }

  addTodo = (todo) => {
    todo.id = Math.random() 
    let todos = [...this.state.todos, {id: todo.id, content: todo.content}]
    console.log("fires up: addTodo ")
    console.log(todo)
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-test">Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
