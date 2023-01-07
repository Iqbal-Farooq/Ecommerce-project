import CartContext from "./CartContext";

import { useReducer } from "react";


const initialState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
       
        console.log("inside cartReducer",action.item)
    
    
         let  updatedAmount=state.totalAmount+action.item.price
        
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
     
 const existingCartIndex=state.items.findIndex(item=>item===action.item);
  const existingItem=state.items[existingCartIndex];
  
    const updatedTotalamount=state.totalAmount-action.item.price;
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
  
 }
    return (
        <CartContext.Provider value={cartCntxt}>
       
        {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;