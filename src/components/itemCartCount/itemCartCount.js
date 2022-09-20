import {  useState } from "react"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export const ItemCartCount=({itemId, cantidad,stock, onAdd})=>{

    const {getUpdateItemCart} = useContext(CartContext);
    
    const [contador, setContador] = useState(cantidad);

    const incrementar = ()=>{
        if(contador<stock){
            setContador(contador + 1)
          
            getUpdateItemCart(itemId,contador+1)
    
         
        }

    }

    const decrementar = ()=>{
        if(contador>1){
            setContador(contador - 1)
            getUpdateItemCart(itemId,contador-1)
        }

    }



    return (
      <>
       
        <div className="item_cant_caja">
            <button className="item_btn_carCountLeft" onClick={decrementar}><MdArrowBackIos/></button>
            <div className="item_cantContador">{contador}</div>
            <button className="item_btn_carCountRight" onClick={incrementar}><MdArrowForwardIos/></button>
            
            </div>
       
      </>
    );
}
