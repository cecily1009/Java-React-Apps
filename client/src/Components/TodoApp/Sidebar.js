import React,{Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import AuthService from './AuthService.js';
export default function Sidebar({user}) {
   const [displayCollapse, toggleCollapse] = useState(false);
    return (
        <>
        <button className="collapsible col-md-2" onClick={()=>toggleCollapse(!displayCollapse)}>Todo Sidebar</button>
        {displayCollapse && <Fragment><nav className="col-md-2 d-none d-md-block  sidebar"  >
                <div className="sidebar-sticky"></div>
                {user==="undefined"? <Fragment><li className="nav-item">
                    <Link to="/todoapp/login">Login</Link>
                </li>
                </Fragment> : <Fragment>
                <li className="nav-item"><Link to={`/todoapp/${user}/listtodo`}>My Todolist</Link></li>
                
                <li className="nav-item"><Link to="/todoapp/login" onClick={AuthService.logoutSuccessfully}>Logout</Link></li> </Fragment>}
                

            </nav></Fragment>}
            
        
       </>
    )
}
