import React from "react"
import { useState } from "react";


export const LoginContext=React.createContext({
     token :'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})


const AuthProvider=(props)=>{
 const InitialToken=localStorage.getItem('token');
    const[TokenState,SetTokenState]=useState(InitialToken);
    
    const userIsLogedIn=!!TokenState;
   


    const  loginHandler=(token)=>{
        localStorage.setItem('token',token);
         SetTokenState(token);

    }

    const logOutHandler=()=>{
        localStorage.removeItem('token');
        SetTokenState(null);

    }
    const auth={

        token:TokenState,
        isLoggedIn:userIsLogedIn,
        login :loginHandler,
        logout:logOutHandler,
    }


    return (<LoginContext.Provider value={auth}>{props.children}
        
                 </LoginContext.Provider>)

}

export default AuthProvider;