import {Container, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import About from './About/About';



function App() {
  const[state,setState]=useState(false)
  const[navstate,setNavstate]=useState(false);
  return (<>
      <CartProvider >
    <Navbar bg="success" expand="lg">

     <Container>
        <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
        
        <NavLink to="/About/about" onClick={()=>setNavstate(true)}>about </NavLink>
         
         
        <Navbar href="#"><CartBtn onClick={()=>setState(true)}></CartBtn>  </Navbar>
      </Container>

    </Navbar>

      {state &&  <Cart onClose={()=>setState(false)}/>}
      {navstate &&<About />}
    
  
  
    {!navstate &&  <Products /> }   </CartProvider>
  
     </>
      
    
  );
}

export default App;
