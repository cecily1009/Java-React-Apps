import React from 'react'
import {Link} from 'react-router-dom';
export default function TodoHome({match}) {
    return (
        <div className="todo-body">
            <h1>Hello, {match.params.name}</h1>
            <h4>Welcome back, you can manage your <Link to={`/todoapp/${match.params.name}/listtodo`} >todos</Link> .</h4>
            <div className="logout-window">
                <a href="/todoapp/login">Logout</a>
            </div>
        </div>
    )
}
