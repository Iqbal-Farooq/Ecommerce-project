import React from "react"
import { useState } from "react";
import { Route,Redirect, useHistory } from "react-router-dom";
import Login from "./Login";
import Home from "../Home/Home";


export const LoginContext=React.createContext({
     token :'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
    emailid: '',
})


const AuthProvider=(props)=>{
 const InitialToken=localStorage.getItem('token');
 const emailState=localStorage.getItem('email')
    const[TokenState,SetTokenState]=useState(InitialToken);
    const[email,SetEmail]=useState(emailState);
    const history=useHistory();
    const userIsLogedIn= !!TokenState;
   


    const  loginHandler=(token,email)=>{
        localStorage.setItem('token',token);
        localStorage.setItem('email',email)
         SetTokenState(token);
         SetEmail(email);

    }

    const logOutHandler=()=>{
           
        localStorage.removeItem('token');
          localStorage.removeItem('email');
        SetTokenState(null);
          SetEmail('');
         
         
         
         
     

    }
    const auth={

        token:TokenState,
        isLoggedIn:userIsLogedIn,
        login :loginHandler,
        logout:logOutHandler,
        emailid:email
    }


    return (<LoginContext.Provider value={auth}>{props.children}
        
                 </LoginContext.Provider>)

}

export default AuthProvider;