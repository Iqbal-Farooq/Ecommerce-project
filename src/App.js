import {Container, Navbar} from 'react-bootstrap';
import "./App.css"
import { NavLink, Route,Switch,} from 'react-router-dom';
import ProductDetails from './Sharp/ProductDetails';
import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import AboutComp from './About/AboutComp';
 import Home from './Home/Home';
 import Contact from './Contact_us/Contact';
 import Login from './LoginPages/Login';


function App() {
  const[state,setState]=useState(false)
  const [home,setHome]=useState(true);


  return (<>
      <CartProvider >
    <Navbar bg="dark" expand="lg">

     <Container>
       
        <NavLink to="/Home/home.js"  >Home</NavLink>
       
         <NavLink to="/Sharp/products">Store </NavLink>
          <NavLink to="/About/aboutcomp">about </NavLink>
             <NavLink to="/Contact_us/Contact" >Contact Us </NavLink>
             <NavLink to="/LoginPages/Login">Login</NavLink>
        
         
         
        <Navbar href="#"><CartBtn onClick={()=>setState(true)}></CartBtn>  </Navbar>
      </Container>

    </Navbar>
     {state && <Cart onClose={()=>setState(false)}/>}
        

 
    <Switch>

     
    
            <Route path="/Home/home.js"> <Home /> </Route> 
     <Route path="/Sharp/products" exact >  <Products /></Route> 
           <Route path="/About/aboutcomp" >  <AboutComp/>  </Route> 
     
   
    <Route path='/Contact_us/Contact'><Contact /></Route>
    <Route path='/Sharp/products/:productId' ><ProductDetails /></Route>
    <Route path='/LoginPages/Login'><Login /></Route>
   
     
    </Switch>
      </CartProvider>
  
     </>
      
    
  );
}

export default App;
