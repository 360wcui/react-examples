import React, { Component } from 'react'

class Todos extends Component {   
    render() { 
        const todos = this.props.todos
        
        const todoList = todos.map(todo => {
            return (
                <div key={todo.id}>
                    <div>{todo.content}</div>
                    <button onClick={()=>this.props.deleteTodo(todo.id)}>Delete me</button>
                </div>
            )
        })
        return ( 
            <div>
                <div>{todoList}</div>                
            </div>
         );
    }
}
 
export default Todos;