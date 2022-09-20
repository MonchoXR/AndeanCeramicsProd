
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../src/utils/firebase";

export const UseProductoFirebase=() =>{

    const {tipoId} = useParams();   //el mismo nombre definido la variable

    const [ items, setItem] = useState([]);
    const [state, setState] = useState(true);

  

    useEffect(()=>{ 
       
        const queryRef = doc(db,"items",tipoId);
     
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            // console.log(newDoc)
         
            setItem(newDoc);
   
        })
        .catch(error=>console.log("ocurrio un",error))
        .finally(() => {
            setState(false)
           console.log(' completed transaccion');
         });
      },[])
    
     
          return {items,state }
          
          

}


