
import Portal from "./Portal";
import {Container,Card,CardGroup,Button,} from "react-bootstrap"


import CartContext from "../Store/CartContext";
import { useContext, useEffect } from "react";

import axios from 'axios';


const Cart=(props)=>{
   const ctx=useContext(CartContext);
  
    const hasItem=ctx.items.length>0;
    if(localStorage.getItem('email')){
         var Formatedemail=  localStorage.getItem('email').replace("@","").replace(".","")
         

    }
    
    async function data(items){
        let res=await axios.get(`https://crudcrud.com/api/38504f71e6494633893417a2fdaa0b69/cart${Formatedemail}`);
        let data= await res.data;
     console.log('removing crud crud ',data)  
     let idx=data.findIndex(item=>item.title===items.title)
     console.log(idx)
      if(idx>=0){
     var idd=data[idx]._id
      console.log(idd)
   var quan=data[idx].quantity
     console.log(quan)

   }
     if(idx>-1 && quan>1){
        console.log("REmoving in data base >2")
             axios.put(`https://crudcrud.com/api/38504f71e6494633893417a2fdaa0b69/cart${Formatedemail}/${idd}`,{...items,quantity:quan-1})
     .then(res=>{console.log('put crud crud ',res.data)
     ctx.removeItem(items)
      console.log('Deleted successfully')
    })
    

        
     }
     else{
            console.log("REmoving  crud crud <2")
         axios.delete(`https://crudcrud.com/api/38504f71e6494633893417a2fdaa0b69/cart${Formatedemail}/${idd}`)
     .then(res=>{console.log('put crud crud ',res.data)
      ctx.removeItem(items)
     console.log('Deleted successfully')})

     }}
    
  
 

 return <Portal> 
  <div  style={{display:"flex ", justifyContent: "space-between" , padding: "1rem"}}> <h1>image</h1><h2>title</h2> <h2>Quantity</h2> <h3>price</h3>
  <Button  onClick={props.onClose}  variant="danger">X</Button>, </div>
 {ctx.items.map((item)=>{return <Container key={Math.random(2)}><CardGroup > 
   
  
  <Card.Body  style={{display:"flex ", justifyContent: "space-between" , padding: "1rem"}} >
  <img  style={{width:"90px",height:"50px"}} src={item.image} alt="images" />
   <Card.Title>{item.title}</Card.Title>
    <Card.Title>{item.quantity}</Card.Title>
   <h3>{item.price}</h3>
   <Button variant="danger" onClick={()=>data(item)}>Remove</Button>
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