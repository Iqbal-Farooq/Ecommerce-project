import CartContext from "../Store/CartContext";
import { useContext } from "react";

const CartBtn=(props)=>{
    const ctx=useContext(CartContext);
   let quantity=0;
    ctx.items.forEach(item=>{quantity=quantity+Number(item.quantity)})
   
     return <button onClick={props.onClick} >
     <span>🛒</span>
        <span>Cart-Items  </span>
        <span>{quantity}</span>
    </button>
}
export default CartBtn;
