import Table from 'react-bootstrap/Table';
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const CartContainerSummary=()=>{
  
  const {getNumeroSubTotal,productCartList } = useContext(CartContext);

  const StripeCheckOut=()=>{
    console.log("Hola");

    fetch("http://localhost:3001/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send along all the information about the items
      body: JSON.stringify(productCartList),
    }
    )
    
      .then(res => {
        console.log("estoy aqui",res);
        if (res.ok) return res.json()
        // If there is an error then make sure we catch that
        return res.json().then(e => console.log("mi error",e))
      })
      .then(({ url }) => {
        // On success redirect the customer to the returned URL
        // console.log(url);
        window.location = url
        console.log(window.location )
      })
      .catch(e => {
        console.log("catch front")
        console.error(e.error)
      })

  }

    return (
        <>
        <div className="cart_segundaSeccion">
          <div className="cart_summary  ">


            <Table  className='cart_contTableFont' >
              <tbody>
                <tr>
                  <th className="cart_sinBottomBorder" scope="row"><h3>ORDEN SUMMARY</h3></th>
                
                  </tr>
                <tr>
                  <th scope="row">SubTotal</th>
                  <td id="cart_subTotalJS" className="prod_colorLetraCart">${getNumeroSubTotal()}</td>
                </tr>
                {/* <tr>
                  <th scope="row">Shipping</th>
                  <td id="cart_shipJS" className="prod_colorLetraCart">100</td>
                </tr> */}
                <tr >
                  <th className="cart_sinBottomBorder" scope="row">Total</th>
                  {/* <td  id="cart_precioTotal" className="cart_sinBottomBorder cart_colorLetraTotal">${getNumeroSubTotal()+100}</td> */}
                  <td  id="cart_precioTotal" className="cart_sinBottomBorder cart_colorLetraTotal">${getNumeroSubTotal()}</td>
                </tr>
              </tbody>
              
            </Table>
            <Link className="prdViewCart" to ={"/checkOut"}><button className="cart_ViewCheckOut">CheckOut</button></Link>
            <button className="cart_ViewCheckOut"  onClick={StripeCheckOut}>CheckOut With Stripe</button>
            <p>Promotion, Coupon Code: </p>
            <div className="cart_cuponContainer">
                <input type="text" className="form-control " placeholder="Cupon Code" />                
                <button className="cart_btnApply">Apply</button>
             </div>

          </div> 
        </div>


        </>
    );
}
