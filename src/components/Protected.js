import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from "./Header";



function Protected(props){
    let cmp = props.component
    const history = useHistory()
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            history.push("/register")
        }
    },[])
    
}
export default Protected;