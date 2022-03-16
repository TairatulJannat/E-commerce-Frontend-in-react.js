import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from "./Header";

 
function Register(){

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/add")
        }
    },[])
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory()

   async function signup(){
        let item = {name,email, password}
        console.log(item);

       let result = await fetch("http://127.0.0.1:8000/api/register",{
            method: "POST",
            body: JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }

        })
        result = await result.json()
        console.log("result", result)
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/add")
    }
    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
        <h1>Register page</h1>
        <input className="form-control" value={name} onChange={(e)=>setName(e.target.value)} type="text"  name="name"  placeholder="Name"/><br/>
        <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  name="email" placeholder="Email"/><br/>
        <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Password"/><br/>
        <button onClick={signup} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    )
}
export default Register;