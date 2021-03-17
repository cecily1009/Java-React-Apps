import React from 'react'
export default function NavbarMenu() {
    return (
        <div className="navbar-body">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Java-React Apps</a>
  
                <ul className="nav justify-content-end ">
                
                <li className="nav-item">
                    <a className="nav-link" href="/counter">Counter App</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/todoapp/login">TodoList App</a>
                </li>
                </ul>
   
            </nav>
        </div>
    )
}
