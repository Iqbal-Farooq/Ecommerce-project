import CartContext from "../Store/CartContext";
import { useContext, useEffect } from "react";
import axios from "axios";


const CartBtn=(props)=>{
    const ctx=useContext(CartContext);
    console.log("cart Btn",ctx.items)
     if(localStorage.getItem('email')){
         var Formatedemail=  localStorage.getItem('email').replace("@","").replace(".","")
          console.log("FORMATED ",Formatedemail)

    };
      useEffect(()=> {
         
            async function refresh(){
           
      const res=await  axios.get(`https://crudcrud.com/api/38504f71e6494633893417a2fdaa0b69/cart${Formatedemail}`);
      const data= await res.data;
      console.log("USEEffect")
     
     
      for(let i=0;i<data.length;i++){
       
        ctx.addItem({title:data[i].title,price:data[i].price,image:data[i].image,quantity:data[i].quantity})
      }} 
       refresh()

        },[])
     
    let  quantity=0;  
        ctx.items.forEach(item=>{quantity=quantity+Number(item.quantity)})
        
  
     return <button onClick={props.onClick} >
     <span>🛒</span>
        <span>Cart-Items  </span>
        <span>{quantity}</span>
    </button>
}
export default CartBtn;
