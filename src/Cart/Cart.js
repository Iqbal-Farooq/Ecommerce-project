
import Portal from "./Portal";
import {Container,Card,CardGroup,Button,} from "react-bootstrap"



import CartContext from "../Store/CartContext";
import { useCallback, useContext } from "react";
import { useEffect } from "react";
import axios from 'axios';


const Cart=(props)=>{
   const ctx=useContext(CartContext);
   
  


   

   
    const hasItem=ctx.items.length>0;
    if(localStorage.getItem('email')){
         var Formatedemail=  localStorage.getItem('email').replace("@","").replace(".","")
          // console.log("FORMATED ",Formatedemail)

    }
    
   async function refresh(e){
      // e.preventDefault();
      ctx.items=[];
      const res=await  axios.get(`https://crudcrud.com/api/6d0fe045d1cc443dad146ffcaf81be85/cart${Formatedemail}`);
      const data=res.data;
      for(let i=0;i<data.length;i++){
        ctx.addItem({title:data[i].title,price:data[i].price,image:data[i].image,quantity:data[i].quantity})
      }
     

    }
 

 return <Portal> 
  <div  style={{display:"flex ", justifyContent: "space-between" , padding: "1rem"}}> <h1>image</h1><h2>title</h2> <h2>Quantity</h2> <h3>price</h3>,<Button  onClick={refresh}  variant="danger">Refresh</Button>
  <Button  onClick={props.onClose}  variant="danger">X</Button>, </div>
 {ctx.items.map((item)=>{return <Container><CardGroup > 
   
  
  <Card.Body  style={{display:"flex ", justifyContent: "space-between" , padding: "1rem"}} >
  <img  style={{width:"90px",height:"50px"}} src={item.image} />
   <Card.Title>{item.title}</Card.Title>
    <Card.Title>{item.quantity}</Card.Title>
   <h3>{item.price}</h3>
   <Button variant="danger" onClick={()=>ctx.removeItem(item)}>Remove</Button>
  </Card.Body>
  
  
  </CardGroup>
 </Container>})}
 

  <Container  style={{display:"flex ", justifyContent: "right" , padding: "1rem"}}>
      <h2>Total ₹ {ctx.totalAmount}</h2>
      </Container>

  <Container  style={{display:"flex ", justifyContent: "center" , padding: "1rem"}}>
       {hasItem &&  <Button  size="large" type="submit" variant="success">
         Purchase
        </Button>} 
      </Container>
  
   
    </Portal>
 
}
export default Cart;