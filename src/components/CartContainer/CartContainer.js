
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { CartContainerDetail } from '../CartContainerDetail/CartContainerDetail';
import { CartContainerSummary } from "../CartContainerSummary/CartContainerSummary";
import { ImSad } from "react-icons/im";
import { RiArrowGoBackLine } from "react-icons/ri";


export const CartContainer=()=>{
  
  const {productCartList} = useContext(CartContext);

    return (
      <>
        <main className="cartCont_banner">
        <h1>Cart</h1>
        </main>
        {
        productCartList.length>0?
        <>
          <section className="cart_contenedor">
          <CartContainerDetail/>
           
          <CartContainerSummary/>
          </section>
        </>
         :
        <>  
          <div className="cartCont_message">
            <ImSad className="cartCont_Icon"/>
            <p>You have no items in your cart!. </p>
            <p>Once you add products, you will see them reflected here.</p>
            <Link className="cartCont_backLink" to="/productos"><button className="cartCont_btnBack"><RiArrowGoBackLine className="cartCont_iconBack"/></button></Link > 
          </div>
        </>
        }
      </>
    );
}
