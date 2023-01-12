import {Container, Navbar} from 'react-bootstrap';
import "./App.css"
import { NavLink, Route,Switch } from 'react-router-dom';
import ProductDetails from './Sharp/ProductDetails';
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
  const [home,setHome]=useState(true);


  return (<>
      <CartProvider >
    <Navbar bg="dark" expand="lg">

     <Container>
       
        <NavLink to="/Home/home.js"  >Home</NavLink>
       
         <NavLink to="/Sharp/products">Store </NavLink>
          <NavLink to="/About/aboutcomp">about </NavLink>
             <NavLink to="/Contact_us/Contact" >Contact Us </NavLink>
        
         
         
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
     
    </Switch>
      </CartProvider>
  
     </>
      
    
  );
}

export default App;

// a yes or no reply from the server not good enough because its   easy to fake ;

// a  server side sessions is a way of handling authentication  once a server grants us a accesses the server genarets & saves some uniqe identifire for every user/visiter;

//  the problem with server side sessions is that if our frond end and backend  are residing on different servers then the server should be stateless 



// authentication token means sending some crdentials to server and then server validets these credentials (matches these credentials with what stored in datadase);

// authentication token is basically based on encryption and decryption if the credentials matches then the server will grenerate some key using some hashing algorithms and this key is only known to the server 

// and then the token will be created based on this key and this token will be sent to client and the client can use this token for future requests & protect resources on the server





// authentication token is better than server side sessions because it only verifies the token ( which is  comming from  client ) if that server had created it then

//  it will give access the client to its resources 





//  the benefit of using ref  is generally we keep track of inputFields ;

//  the use of header-Type: Application/json is that  the Auth-rest  Api should know that json data is comming;