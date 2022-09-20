import { Link } from "react-router-dom";
import {  useState } from "react"
import { useContext, } from "react";
import { CartContext } from "../../Context/CartContext";

export const Item=({productos, items})=>{


  const {addProduct,isIntCart,addCantToItemCart,productCartList } = useContext(CartContext);

  const agregarItem = () => {

    if (!isIntCart(productos.id)) {
      const newProduct = { ...productos, cantidad: 1 };

      addProduct(newProduct);

    } 
     else {
 
        addCantToItemCart(productos.id, +1);
      
      
    }
 
  };   


    return (
      <>
        <div className="prod_col_margen">
          <div className="prod_marco">
            <div className="prod_img">
            <Link to ={`/item/${productos.id}`}>   <img src={productos.img} className="" alt="Kero" /></Link>
              <div className="prod_sale">sale!</div>
            </div>
            <h4 className=" prod_textCenter ">{productos.nombre}</h4>
            <div className="prod_cajaInfoCart">
              <div className="prod_price">
                <div className="prod_priceBefore">$60.00</div>
                <div className="prod_priceCurrently">${productos.precio}</div>
            
              </div>
               <button  className="prod_addCart"  onClick={agregarItem}>Add To Cart</button>
              {/* <button  className="prod_addCart">Add To Cart</button> */}
            </div>
          </div>
        </div>
      </>
    );
}

