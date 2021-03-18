import React from 'react'
import AuthService from './AuthService';
import { Route, Redirect } from 'react-router-dom';
export default function PrivateRoute(props) {
    return (
        <>
         {AuthService.isUserLoggedIn()?<Route {...props}/>:<Redirect to="/todoapp/login" />}   
        </>
    )
}
