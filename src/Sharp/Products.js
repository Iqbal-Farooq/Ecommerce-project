import {Container,Row,Card,Col, Button} from "react-bootstrap"
import React from "react";
import {Link} from 'react-router-dom';
import CartContext from "../Store/CartContext";
import { useContext,useEffect} from "react";
import axios  from "axios";
import { LoginContext } from "../LoginPages/LoginContext";


const Products=()=>{
  
   
 
 const ctxx=useContext(LoginContext)
  
 
  const ctx=useContext(CartContext)
   if(localStorage.getItem('email')){
         var Formatedemail=  localStorage.getItem('email').replace("@","").replace(".","")
          console.log("FORMATED ",Formatedemail)

    }


  

    
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

async function Adddata(item){
  const obj={title:item.title,price:item.price,quantity:item.quantity,image:item.imageUrl}


     const res= await axios.get(`https://crudcrud.com/api/6d0fe045d1cc443dad146ffcaf81be85/cart${Formatedemail}`);
   let data= await res.data;
   
   let idx=data.findIndex(item=>item.title===obj.title)
    console.log("index",idx)
   if(idx>=0){
     var id=data[idx]._id
   var quan=data[idx].quantity

   }
  
  

   console.log("get data",data);

  if(idx>=0){
    // const newobj={...obj,quantity:quan+1}
    // console.log("put data obj",obj)
    //  console.log("new data obj",newobj)
       const res= await axios.put(`https://crudcrud.com/api/6d0fe045d1cc443dad146ffcaf81be85/cart${Formatedemail}/${id}`,{...obj,quantity:quan+1});
       const data=await res.data
       ctx.addItem(obj)
      console.log('put data',data)

     console.log("PUT",res)

     }else {

      const res= await axios.post(`https://crudcrud.com/api/6d0fe045d1cc443dad146ffcaf81be85/cart${Formatedemail}`,obj);
       const data= await res.data;
       ctx.addItem(obj)
      
     console.log("POst New data",res)}

}



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
                <Button onClick={()=>{Adddata({...item,quantity:1})}} size="md" style={{display:"flex ",margin:"0 3px 0 9px"}} >Add-To-Cart</Button>
              </Card.Text>
            </Card.Body>

        </Col>
      ))}
    </Row>



</>)




}
export default Products