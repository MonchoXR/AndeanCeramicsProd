import { useState } from "react"
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


export const ItemCount=({stock,initial, onAdd})=>{

    const [contador, setContador] = useState(initial);

    const incrementar = ()=>{
        if(contador<stock){
            setContador(contador + 1)
        }
  
    }

    const decrementar = ()=>{
        if(contador>initial){
            setContador(contador - 1)
        }

    }



    return (
      <>
      <div className="item_text_cantidad">Cantidad</div>
      <div className="item_cant_caja">
                    
            <button className="item_btn_contLeft" onClick={decrementar}><MdArrowBackIos/></button>
            <div className="item_conta">{contador}</div>
            <button className="item_btn_contRigth" onClick={incrementar}><MdArrowForwardIos/></button>
        </div>

        <button disabled={contador>0? false:true} className={`  ${contador<1? 'Negro':'item_btn_agregar' }`} onClick={() => onAdd(contador)}>
                    Agregar Carrito
         </button>        
      </>
    );
}
