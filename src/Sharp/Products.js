import {Container,Row,Card,Col, Button} from "react-bootstrap"
import {Link} from 'react-router-dom';
import CartContext from "../Store/CartContext";
import { useContext } from "react";
const Products=()=>{
  const ctx=useContext(CartContext)
    
const productsArr = [

{
  id:1,

title: 'APPLE iPhone 14 (128 GB)',

price:73990,

imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',

},
{
  id:2,

title: 'Men  Casual Jacket ',

price:489,

imageUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/a/o/w/xxl-1-no-tnvgywthdfuljacket-k15-tripr-original-imaghahhfqdyvbcz.jpeg?q=70',

},



{
id:3,
title: 'Women  Black T-Shirt',

price: 329,

imageUrl: 'https://rukminim1.flixcart.com/image/832/832/l2arp8w0/shopsy-t-shirt/s/3/0/s-nmp-try-this-original-imag5xe3sdhgg8sg.jpeg?q=70',

},

{
  id:4,

title: 'Men  Sleeve Sweatshirt',

price: 549,

imageUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/q/z/9/xl-sw40-blmt-eyebogler-original-imaghcy9f5bkbzeu.jpeg?q=70',

},
{
  id:5,

title: 'Smartwatch ',

price: 1499,

imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/f/r/z/-original-imaggtzta6yd73kf.jpeg?q=70',

},
{
  id:6,

title: 'ASUS VivoBook Core i3 10th Gen',

price: 52990,

imageUrl: 'https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70',

},


{
  id:7,
  title:'Apple AirPods ',
  price: 13990 ,
imageUrl:"https://m.media-amazon.com/images/I/31Ri-FAMBUL._SY445_SX342_QL70_FMwebp_.jpg"
},
{
  id:8,
  title:' Bike for Kids' ,
  price:7999,

  imageUrl:"https://m.media-amazon.com/images/I/51dK1EbowSL._SX300_SY300_QL70_FMwebp_.jpg"
}

]

   
  


return (<>

     
     <Row   md={4}  className="mt-2" >
      {productsArr.map((item) => ( 
        <Col   >
      
            <Link to='/Sharp/products/item.id'></Link>
            <Card.Body className="p-5">
            
             <Card.Title className="mb-2">{item.title}</Card.Title>
             
           <Link to={`/Sharp/products/${item.id}/`}><img   style={{width:"80%", height:"50%"}}  src={item.imageUrl} alt="images" /> </Link>
              <Card.Text style={{display:"flex ",margin:"15px 0px 0 0"}} >
              <h4> ₹ {item.price} </h4>
              <Button onClick={()=>{ctx.addItem({...item,quantity:1})}} size="md" style={{display:"flex ",margin:"0 3px 0 9px"}} >Add-To-Cart</Button>
              </Card.Text>
            </Card.Body>

        </Col>
      ))}
    </Row>



</>)




}
export default Products