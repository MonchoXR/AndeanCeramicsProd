import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
// import { useState } from 'react';
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext";
//Firebase//
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../utils/firebase";

export const CheckOut=()=>{

    // const [validated, setValidated] = useState(false);

    const {productCartList ,getNumeroSubTotal} = useContext(CartContext);
    // const [idOrder, setIdOrder] = useState("");

    const sendOrder=(e)=>{
        e.preventDefault();
        // const form = e.currentTarget;
      
        // if (form.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
         
        // }

        // setValidated(true);
        const datachk = new FormData(e.target);
         let datosFormchk = Object.fromEntries(datachk.entries());
  

        const order = {
            buyer: {
              name: datosFormchk.inputName,
              LastName:datosFormchk.inputLastName,
              Address:datosFormchk.inputAddress,
              email:datosFormchk.inputAddress,
              date:new Date().toLocaleString() +""
            },
            items: productCartList,
            total: getNumeroSubTotal()+100
          }
       

        //crear referencia en la base de datos de donde voy a guardar el documento
        const queryRef = collection(db,"orders");
           //agregamos el documento
        // addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
        addDoc(queryRef, order);
    
        console.log(order)
        e.target.reset();


        
    }

    return (
      <>
         <main className="check_banner">
           <h1>CheckOut</h1>
         </main>
        {
            productCartList.length>0 ?
            <>
            <div className='container row check_content'>
                <div className='col-8'>
                    <Form id="formCheckout" onSubmit={sendOrder} className="row">

                        <Form.Group className="col-md-6 " controlId="inputNamechk" >
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="inputName" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="col-md-6 " controlId="inputLastNamechk">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" placeholder="LastName" name="inputLastName" required/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="col-12 " controlId="inputAddresschk">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control type="text" placeholder="" name="inputAddress" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="col-12" controlId="inputEmailChk">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="inputEmail" required/>
                            <Form.Text className="text-muted">
                            {/* We'll never share your email with anyone else. */}
                            </Form.Text>
                        </Form.Group>

                    </Form>
                </div>
        
            <div className=" check_segundaSeccion col-4 ">
                 <h4>Your Order</h4>

                <Table >
                    <thead>
                        <tr>
                           <th scope="col">Product </th>
                           <th scope="col">SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                      {productCartList.map((item) => (
                         <>
                        <tr>          
                            <td>{item.nombre}</td>
                            <td>${item.precio*item.cantidad}</td>        
                        </tr>   
                         </>
                  ))}   
                    </tbody>
                    <tbody>     
                        <tr> 
                            <th>SubTotal</th>
                            <th id="check_subTotalJS" >${getNumeroSubTotal()}</th>
                        </tr> 
        
                        <tr> 
                            <td>Shipping</td>
                            <td id="check_shipJS">$100</td>      
                        </tr>

                        <tr> 
                            <th>Total</th>
                            <th id="check_precioTotal" className=" check_sizeTotal"> ${getNumeroSubTotal()+100}</th>
                        </tr>
                  </tbody>
                 
                </Table>
                 <button type="submit" form="formCheckout" className="check_order" >Place Order</button>
            
            </div>
        </div>
        </>
       :
       <>
         <div className="cartCont_message">
            <p >You have no items in your cart!</p> 
         </div>
        </>
         }
      </>
    );
}
