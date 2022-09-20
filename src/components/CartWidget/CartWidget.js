
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

function CartWidget(){

    const {getNumeroTotalCount,productCartList} = useContext(CartContext);

    return(
    <>
        { productCartList.length > 0 &&
            <>
           
            <div className="cardWidget">
                <FaShoppingCart/>
                <h6 className="umberCardWidget">{getNumeroTotalCount()}</h6>
            </div>
           </>
        }
      
    </>
    )
}

export default CartWidget;