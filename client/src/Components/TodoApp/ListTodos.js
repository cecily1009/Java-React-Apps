import React from 'react';
import Sidebar from './Sidebar';
export default function ListTodos({match}) {
    
    const todos=[
        {id:1, description:'Learn React', completed:false, targetDate:new Date()},
        {id:2, description:'Learn Java-Spring', completed:false, targetDate:new Date()},
        {id:3, description:'Doctort appointment', completed:false, targetDate:new Date()},
        {id:4, description:'Health insurance application', completed:false, targetDate:new Date()},
    ]
    return (
        <>
        <Sidebar user={match.params.name}/>
        <div className="todo-body">
            
           <h1>List of Todos for {match.params.name}</h1> 
           <table className="list-body">
               <thead>
                   <tr>
                       <th>Description</th>
                       <th>Completed</th>
                       <th>Target Date</th>
                   </tr>
               </thead>
               <tbody>
                   {todos.map((todo)=>
                       <tr key={todo.id}>
                           <td>{todo.description}</td>
                           <td>{todo.completed.toString()}</td>
                           <td>{todo.targetDate.toString().substring(4,15)}</td>
                       </tr>
              
           )}
               </tbody>
               
           </table>
           
           
        </div>
        </>
    )
}
