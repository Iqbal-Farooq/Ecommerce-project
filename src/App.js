import {Container, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import AboutComp from './About/AboutComp';
 import Home from './Home/Home';
 import Contact from './Contact_us/Contact';


function App() {
  const[state,setState]=useState(false)
  const[navstate,setNavstate]=useState(false);
  const [home,sethome]=useState(false);
  const [store,Setstore]=useState(true);
  const[contact,setContact]=useState(false);

const AboutHandler=()=>{
   setNavstate(true)
   sethome(false)
   Setstore(false);
   setContact(false)

}

const HomeHandler=()=>{
  sethome(true)
  setNavstate(false)
  Setstore(false)
  setContact(false)

}
const ProductsHandler=()=>{
  Setstore(true);
  setNavstate(false)
  sethome(false)
  setContact(false)

}
const ContactHandler=()=>{
  setContact(true)

  Setstore(false);
  setNavstate(false)
  sethome(false)

}

 
 
  return (<>
      <CartProvider >
    <Navbar bg="dark" expand="lg">

     <Container>
       
        <NavLink to="/Home/home.js"  onClick={HomeHandler}>Home</NavLink>
       
         <NavLink to="/Sharp/products" onClick={ProductsHandler}>Store </NavLink>
          <NavLink to="/About/aboutcomp" onClick={AboutHandler}>about </NavLink>
             <NavLink to="/Contact_us/Contact" onClick={ContactHandler}>Contact Us </NavLink>
        
         
         
        <Navbar href="#"><CartBtn onClick={()=>setState(true)}></CartBtn>  </Navbar>
      </Container>

    </Navbar>

      {state &&  <Cart onClose={()=>setState(false)}/>}
      {navstate &&<AboutComp/>}
      {home && <Home /> }
     {store  && <Products />}
     {contact && <Contact />} 
      </CartProvider>
  
     </>
      
    
  );
}

export default App;
