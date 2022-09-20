import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"

export const UseProducto=(data) =>{

    const {tipoId} = useParams();   //el mismo nombre definido la variable

    const [ items, setItem] = useState([]);
    const [state, setState] = useState(true);
console.log("entro aqui");
    const eventData =()=>{

        return new Promise((resolve, reject)=>{
          setTimeout(()=>{
            resolve(data);
            reject(err => console.log("hubo error en promesa",err))        
          },2000)
          })
      }

    useEffect(()=>{ 
     
        const getData=async()=>{
            try{
            // const data = await eventData();
     
            const listadoItems= await eventData();
          
            const nuevadata = listadoItems.filter(item=>item.id === parseInt(tipoId))

            setItem(nuevadata[0]);

            }
            catch(err){
                console.log("ver error",err)
            }
            finally{
                console.log(' coompleted transaccion nuevo')
                setState(false)
            }
        }
        getData();
      
      },[data])
    
     
          return {items,state }
          
          

}