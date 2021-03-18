import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
export default function TodoHome({match}) {
   
    return (
        <>
        <Sidebar user={match.params.name}/>
        <div className="todo-body">
            <h1>Hello, {match.params.name}</h1>
            <h4>Welcome back, you can manage your <Link to={`/todoapp/${match.params.name}/listtodo`} >todos</Link> .</h4>
            
        </div>
        </>
    )
}
