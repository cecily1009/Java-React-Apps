import React, {useState} from 'react'
import TodoHome from './TodoHome';
export default function Login() {
   const [formData, setFormData] = useState({
    username: '',
    password: '',   
    showsuccess:false,
    showfail:false
});
    
    const { username, password, showsuccess, showfail } = formData;
    
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
    const loginClicked = (e) =>{
        e.preventDefault();
        console.log("login clicked!");
        setFormData({isloggedin:true})
        if(username==='Guest01' && password==='1234567') {
            setFormData({showsuccess:true,showfail:false})
        }else {
            setFormData({showsuccess:false, showfail:true})
        }
    }

    if(showsuccess) {
        return <TodoHome/>
    }
    return (
        <div className="login-body ">
            
            {showsuccess&&<div className="logged-in">Login Successfully!</div> }
            {showfail&& <div className="login-fail">Invalid Credentials</div>}
            User Name: <input type="text" name = "username" value ={username} onChange={(e)=>onChange(e)}/> 
            Password : <input type="password" name="password" value = {password} onChange={(e)=>onChange(e)}/>
            <button className="btn btn-primary"  onClick={loginClicked}>Login</button>
            
        </div>
    )
}
