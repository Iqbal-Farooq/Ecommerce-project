
import Portal from "./Portal";
import {Container,Card,CardGroup,Button,} from "react-bootstrap"

// const Cart=(props)=>{
   
//     const cartElements = [{

// title: 'Colors',

// price: 100,

// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

// quantity: 2,

// },

// {

// title: 'Black and white Colors',

// price: 50,

// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

// quantity: 3,

// },

// {

// title: 'Yellow and Black Colors',

// price: 70,

// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

// quantity: 1,

// },




// ]
//  let amount=0;
// cartElements.map((item)=>{return amount+=Number(item.price)})

//  return <Portal> 
//   <div  style={{display:"flex ", justifyContent: "space-between" , padding: "1rem"}}> <h1>image</h1><h2>title</h2> <h2>Quantity</h2> <h3>price</h3>
//   <Button  onClick={props.onClose}  variant="danger">X</Button></div>
//  {cartElements.map((item)=>{return <Container>

//   <CardGroup > 
   
  
//   <Card.Body  style={{display:"flex ", justifyContent: "space-between" , padding: "1rem"}} >
//   <img  style={{width:"90px",height:"50px"}} src={item.imageUrl} />
//    <Card.Title>{item.title}</Card.Title>
//     <Card.Title>{item.quantity}</Card.Title>
//    <h3>{item.price}</h3>
//    <Button variant="danger">Remove</Button>
//   </Card.Body>
  
  
//   </CardGroup>
//  </Container>})}
 

//   <Container  style={{display:"flex ", justifyContent: "right" , padding: "1rem"}}>
//       <h2>Total Rs={amount}</h2>
//       </Container>

//   <Container  style={{display:"flex ", justifyContent: "center" , padding: "1rem"}}>
//         <Button  size="large" type="submit" variant="success">
//          Purchase
//         </Button>
//       </Container>
  
   
//     </Portal>
 
// }
// export default Cart;
import CartContext from "../Store/CartContext";
import { useContext } from "react";


const Cart=(props)=>{
    const ctx=useContext(CartContext);
    const hasItem=ctx.items.length>0;
   
   
 

 return <Portal> 
  <div  style={{display:"flex ", justifyContent: "space-between" , padding: "1rem"}}> <h1>image</h1><h2>title</h2> <h2>Quantity</h2> <h3>price</h3>
  <Button  onClick={props.onClose}  variant="danger">X</Button></div>
 {ctx.items.map((item)=>{return <Container><CardGroup > 
   
  
  <Card.Body  style={{display:"flex ", justifyContent: "space-between" , padding: "1rem"}} >
  <img  style={{width:"90px",height:"50px"}} src={item.imageUrl} />
   <Card.Title>{item.title}</Card.Title>
    <Card.Title>{item.quantity}</Card.Title>
   <h3>{item.price}</h3>
   <Button variant="danger" onClick={()=>ctx.removeItem(item)}>Remove</Button>
  </Card.Body>
  
  
  </CardGroup>
 </Container>})}
 

  <Container  style={{display:"flex ", justifyContent: "right" , padding: "1rem"}}>
      <h2>Total Rs={ctx.totalAmount}</h2>
      </Container>

  <Container  style={{display:"flex ", justifyContent: "center" , padding: "1rem"}}>
       {hasItem &&  <Button  size="large" type="submit" variant="success">
         Purchase
        </Button>} 
      </Container>
  
   
    </Portal>
 
}
export default Cart;