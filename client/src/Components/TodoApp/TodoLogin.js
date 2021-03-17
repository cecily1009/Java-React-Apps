import React, {useState} from 'react';
export default function Login({history}) {
   const [formData, setFormData] = useState({
    username: "",
    password: "",   
    showsuccess:false,
    showfail:false
});
    
    const { username, password, showsuccess, showfail } = formData;
    
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
    const loginClicked = (e) =>{
        e.preventDefault();
        setFormData({isloggedin:true})
        if(username==='Guest01' && password==='1234567') {
            setFormData({showsuccess:true,showfail:false})
            history.push(`/todoapp/welcome/${username}`)
        }else {
            setFormData({showsuccess:false, showfail:true})
        }
    }

    
    return (
        <div className="login-body ">
            <div>
                <h1>Todo List App</h1>
                
            </div>
        
            {showsuccess&&<div className="logged-in">Login Successfully!</div> }
            {showfail&& <div className="login-fail">Invalid Credentials</div>}
            User Name: <input type="text" name = "username" value ={username} onChange={(e)=>onChange(e)}/> 
            Password : <input type="password" name="password" value = {password} onChange={(e)=>onChange(e)}/>
            <button className="btn btn-primary"  onClick={loginClicked}>Login</button>
            
        </div>
    )
}
