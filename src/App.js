import {Container, Navbar} from 'react-bootstrap';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';


function App() {
  const[state,setState]=useState(false)
  return (<>
    <Navbar bg="success" expand="lg">

     <Container>
        <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
        
        <Navbar href="#">Home </Navbar>
         <Navbar href="#">about </Navbar>
         
        <Navbar href="#"><CartBtn onClick={()=>setState(true)}></CartBtn>  </Navbar>
      </Container>

    </Navbar>
    {state &&  <Cart onClose={()=>setState(false)}/>}
    
  
  
     <Products />
      
    </>
  );
}

export default App;
