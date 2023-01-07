import {Container, Navbar} from 'react-bootstrap';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';


function App() {
  const[state,setState]=useState(false)
  return (<>
      <CartProvider >
    <Navbar bg="success" expand="lg">

     <Container>
        <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
        
        <Navbar href="#">Home </Navbar>
         <Navbar href="#">about </Navbar>
         
        <Navbar href="#"><CartBtn onClick={()=>setState(true)}></CartBtn>  </Navbar>
      </Container>

    </Navbar>

      {state &&  <Cart onClose={()=>setState(false)}/>}
    
  
  
     <Products />   </CartProvider>
  
     </>
      
    
  );
}

export default App;
