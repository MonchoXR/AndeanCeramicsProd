import React, { useEffect, useState } from "react";
import {collection, getDocs, doc, getDoc} from "firebase/firestore";
import {db} from "../../utils/firebase";


export const PaginaFirebase = () =>{

    const [arregloProductos, setArregloProductos] = useState([]);
    const [producto, setProductos] = useState();

    useEffect(()=>{
       
        const getData = async()=>{

            const query = collection(db,"items") //ponemos la bd y nombre de la Collection
            const response = await getDocs(query)
            const docs = response.docs;   
            // console.log("doc info", docs[0].data())
            // console.log("doc id", docs[0].id)
            const data = docs.map(doc=>{return {...doc.data(), id:doc.id}})
            setArregloProductos(data);
        }
        getData();

    },[])

    useEffect(()=>{

        // console.log("2")
        const getDocumento = async()=>{

            const query = doc(db,"items","Pmh34ZDJQTuC5MQQPLYj") //ponemos la bd y nombre de la Collection
            const response = await getDoc(query)
            const producto = {...response.data(), id:response.id}
            setProductos(producto)
        }
        getDocumento();

    },[])


    return{ arregloProductos, producto}

}