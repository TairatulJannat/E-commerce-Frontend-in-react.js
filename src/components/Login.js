import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from "./Header";

 function Login(){ 
    
    const history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    useEffect(()=>{
        if(localStorage.getItem("user-info"))
        {
            history.push("/add")
        }
    },[])
   async function login(){
     
    let item = {email, password}
 
    let result= await fetch("http://127.0.0.1:8000/api/login",{
            method:"POST",
            body:JSON.stringify(item),
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
            
        })
     result = await result.json()
    //  console.log("result", result)
     localStorage.setItem("user-info",JSON.stringify(result))
     history.push('/add')

    }

    return(
        <div>
        <Header />
        <h1>Login page</h1>
        <div className="col-sm-6 offset-sm-3">
        <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  name="email" placeholder="Email"/><br/>
        <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Password"/><br/>
        <button onClick={login} className="btn btn-primary">Login </button>
        </div>

        </div>
    )
}
export default Login;