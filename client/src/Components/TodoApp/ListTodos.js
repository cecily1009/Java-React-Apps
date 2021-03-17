import React from 'react'

export default function ListTodos({match}) {
    return (
        <div className="todo-body">
            List of Todos for {match.params.name}
        </div>
    )
}
