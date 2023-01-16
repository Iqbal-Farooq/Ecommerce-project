import CartContext from "./CartContext";
import AuthProvider from "../LoginPages/LoginContext";
import { useEffect, useReducer } from "react";
import { useContext } from "react";
import Products from "../Sharp/Products";
import { LoginContext } from "../LoginPages/LoginContext";
import axios from 'axios';
  if(localStorage.getItem('email')){
         var Formatedemail=  localStorage.getItem('email').replace("@","").replace(".","")
          console.log("FORMATED ",Formatedemail)

    }






const initialState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
       
        console.log("inside cartReducer",action.item)
    
    
         let  updatedAmount=Number(state.totalAmount)+Number(action.item.price)*Number(action.item.quantity)
        
        const existigCartIndex=state.items.findIndex(item=>item.title===action.item.title);
        
         const existingItem=state.items[existigCartIndex];
      

       
        let updatedItems;

        if(existingItem){
            const updatedItem= {...existingItem,quantity:Number(existingItem.quantity)+Number(action.item.quantity)}
            updatedItems=[...state.items];
            updatedItems[existigCartIndex]=updatedItem;
            
                    
        }
        else{
             
            
            updatedItems=state.items.concat(action.item);
            
        }
       
        
          return {
            items:updatedItems,
            totalAmount:updatedAmount,
          }
}

 if(action.type==="REMOVE"){
    data(action.item)
    async function data(){
        let res=await axios.get(`https://crudcrud.com/api/6d0fe045d1cc443dad146ffcaf81be85/cart${Formatedemail}`);
        let data= await res.data;
     console.log('removing crud crud ',data)  
     let idx=data.findIndex(item=>item.title===action.item.title)
     console.log(idx)
      if(idx>=0){
     var idd=data[idx]._id
      console.log(idd)
   var quan=data[idx].quantity
     console.log(quan)

   }
     if(idx>-1 && quan>1){
        console.log("REmoving in data base >2")
             axios.put(`https://crudcrud.com/api/6d0fe045d1cc443dad146ffcaf81be85/cart${Formatedemail}/${idd}`,{...action.item,quantity:quan-1})
     .then(res=>{console.log('put crud crud ',res.data)})

        
     }
     else{
            console.log("REmoving  crud crud <2")
         axios.delete(`https://crudcrud.com/api/6d0fe045d1cc443dad146ffcaf81be85/cart${Formatedemail}/${idd}`)
     .then(res=>{console.log('put crud crud ',res.data)})

     }
    

    

    }
    
   
   
  
//     console.log("index",idx)
//    if(idx>=0){
//      var id=data[idx]._id
//    var quan=data[idx].quantity;

//    }
     
 const existingCartIndex=state.items.findIndex(item=>item===action.item);
  const existingItem=state.items[existingCartIndex];
  
    const updatedTotalamount=Number(state.totalAmount)-Number(action.item.price);
    console.log("title cheking in remove",action.item.title)
   
   
    let updatedItems;
   

    if(existingItem.quantity<2){
        updatedItems=state.items.filter((item)=>item!==action.item)
        
    }
    else{
       const updatedItem={...existingItem,quantity:existingItem.quantity-1}
        updatedItems=[...state.items];
        updatedItems[existingCartIndex]=updatedItem;
          console.log('INSIDE ELSE STATEMENT');

    }
    return{
        items:updatedItems,
        totalAmount:updatedTotalamount,
    }


 }
    }

   


const CartProvider=(props)=>{
    const ctx=useContext(LoginContext)
    if(localStorage.getItem('email')){
         var FormatedEmail=  localStorage.getItem('email').replace("@","").replace(".","")
          console.log("FORMATED ",FormatedEmail)

    }
  
    // const FormatedEmail='testgmailcom';
    const[CartState,SetCartState]=useReducer(cartReducer,initialState)


    const addItemToCartHandler=(item)=>{
        SetCartState({type:"ADD",item:item})
    }

    const removeItemFromCartHandler=(item)=>{ 
         SetCartState({type:"REMOVE",item:item})
    }

    const cartCntxt={
         items:CartState.items,
        
          totalAmount:CartState.totalAmount,
       addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        // emailid:FormatedEmail,
  
 }
    //   useEffect(()=>{
    //     const obj={elements:CartState.items};
    //      console.log("object",obj)
    //         axios.get(`https://crudcrud.com/api/6faa1026523a4b91ba44c375f60e7cd3/cart${FormatedEmail}`)
    //          .then(res => {console.log(res.data)
      
            //    if(res.data.length !==0){
            //     console.log("inside if",obj)

            //       const id = res.data[0]._id;

    //                 axios.put(`https://crudcrud.com/api/6faa1026523a4b91ba44c375f60e7cd3/cart${FormatedEmail}/${id}`,obj)
    //                   .then(res => console.log(res));
    //                    } 
    //                    else {
    //                             axios.post(`https://crudcrud.com/api/6faa1026523a4b91ba44c375f60e7cd3/cart${FormatedEmail}`,obj)
    //                               .then(res=>console.log(res));
    //                              }
    //                                    })
    //                                         },[CartState])
 
    return (
        <CartContext.Provider value={cartCntxt}>
       
        {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;