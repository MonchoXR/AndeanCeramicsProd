
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const ItemListMiniCart=()=>{
  const {productCartList, deleteProduct,getNumeroSubTotal} = useContext(CartContext);

    return (
      <>
        {productCartList.map((item) => (
          <>
            <div  key={item.id} className="prod_cajaDetalle">
              <div className="prod_imgCompra">
                <img src={item.img}  alt="Catalago3" />
                <button className="prodEliminaCss"  onClick={()=>deleteProduct(item.id)}> X </button>
              </div>

              <div >
                <span>{item.nombre}</span>
                <br />
                <span>
                  {item.cantidad}x ${item.precio}
                </span>
              </div>
            </div>

     
          </>
        ))}
            <p className="prod_colorLetraCart"><strong>SubTotal:</strong><span className=""> ${getNumeroSubTotal()}</span></p>
            <div className="prodMiniCart " >
            <Link className="prdViewCart" to ={"/cart"}><button className="prdViewCartBtn"> View Cart </button></Link>
            <Link className="prdViewCart" to ={"/checkout"}><button className="prdViewCartBtn">CheckOut </button></Link>
            </div>
      </>
    );
}
