
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ItemCartCount } from '../itemCartCount/itemCartCount';
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
export const CartContainerDetail=()=>{
  
  const {productCartList, deleteProduct,clear} = useContext(CartContext);


    return (

        <>
        <div className="cart_primeraSeccion">
          <Table striped  className='cart_contTableFont' >
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">SubTotal</th>
                </tr>
              </thead>
              <tbody>
          
                  {
                    productCartList.map(item=>(
                      
                      <tr key={item.id}>
                          <th className="cartCont_cuadro" scope="row " ><div  className="cartCont_cuadro"><button onClick={()=>deleteProduct(item.id)} className="cartCont_btnEliminar"> <FaRegTrashAlt/> </button></div></th>
                          <td className="cartCont_cuadro"><img src={item.img} className="cartImagen" alt="Catalago3" /></td>
                          <td  className="cartCont_cuadro"> <div> {item.nombre} </div></td>
                          <td  className="cartCont_cuadro"> <div> ${item.precio} </div></td>
                          {/* <td  className="cartCont_cuadro"><div><button className="" >-</button> {item.cantidad} <button className="" >+</button></div></td> */}
                          <td  className="cartCont_cuadro"><ItemCartCount itemId={item.id} cantidad={item.cantidad} stock={item.stock} /></td> 
                          <td  className="cartCont_cuadro"><div> {item.cantidad*item.precio} </div></td>
                      </tr>

                    ))
                  } 
              </tbody>
              
            </Table>
            <Link to ={"/products"}> <button className="cart_btnContinueShop" >Continue Shopping</button></Link>
            <button className="cart_btnVaciarShop"  onClick={()=>clear()} >Remove all Items</button>
        </div>
         </>
    );
}
