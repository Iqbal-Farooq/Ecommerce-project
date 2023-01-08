import {Container, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import AboutComp from './About/AboutComp';
 import Home from './Home/Home';


function App() {
  const[state,setState]=useState(false)
  const[navstate,setNavstate]=useState(false);
  const [home,sethome]=useState(false);
  const [store,Setstore]=useState(true);

const AboutHandler=()=>{
   setNavstate(true)
   sethome(false)
   Setstore(false);

}

const HomeHandler=()=>{
  sethome(true)
  setNavstate(false)
  Setstore(false)

}
const ProductsHandler=()=>{
  Setstore(true);
  setNavstate(false)
  sethome(false)

}

 
 
  return (<>
      <CartProvider >
    <Navbar bg="dark" expand="lg">

     <Container>
       
        
        <NavLink to="/About/aboutcomp" onClick={AboutHandler}>about </NavLink>
         <NavLink to="/Sharp/products" onClick={ProductsHandler}>Store </NavLink>
        <NavLink to="/Home/home.js"  onClick={HomeHandler}>Home</NavLink>
         
         
        <Navbar href="#"><CartBtn onClick={()=>setState(true)}></CartBtn>  </Navbar>
      </Container>

    </Navbar>

      {state &&  <Cart onClose={()=>setState(false)}/>}
      {navstate &&<AboutComp/>}
      {home && <Home /> }
    
  
  
    {!navstate && !home  && <Products /> }   </CartProvider>
  
     </>
      
    
  );
}

export default App;
