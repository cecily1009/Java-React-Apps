import React from 'react'

export default function ListTodos({match}) {
    
    const todos=[
        {id:1, description:'Learn React'},
        {id:2, description:'Learn Java-Spring'},
        {id:3, description:'Doctort appointment this Sunday'},
        {id:4, description:'Health insurance application'},
    ]
    return (
        <div className="todo-body">
           <h1>List of Todos for {match.params.name}</h1> 
           <ul className="list-body">
               {todos.map((todo)=>(
               <li key={todo.id}>
                   {todo.description}
               </li>
           ))}
           </ul>
           
           
        </div>
    )
}
