import { Productos } from '../Producto/Producto';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
export const Catalogo=()=>{

  
  const [misProdcutos, setMisProductos] =useState([])

  const [categVariados, setCategVariados] =useState([])
  const [categIglesia, setCategIglesia] =useState([])
  const [categLampara, setCatLampara] =useState([])
  const [categArca, setCatArca] =useState([])
  const [cateNaci, setCatcateNaci] =useState([])

  const obtenerProductos =()=>{
      return new Promise((resolve, reject)=>{
          // setTimeout(()=>{
            resolve(Productos)
            reject(err =>console.error(err))
          // },3000);
      })
  }


  useEffect(()=>{

    const funcionAsincrona =async()=>{
      try {

        const listadoProductos = await obtenerProductos();

        // const nuevaLista = listadoProductos.map((item)=>
        // {
        //   return{
        //     categoria: item.categoria,
        //     img: item.img
        //   }
        // })
          
   
        setCategVariados(listadoProductos[0])
        setCategIglesia(listadoProductos[1])
        setCatLampara(listadoProductos[3]);
        setCatArca(listadoProductos[8]);
        setCatcateNaci(listadoProductos[10]);

        setMisProductos(listadoProductos)
         
      } catch (error) {
          console.log("Hubo error",error);
      }
    
    }
    funcionAsincrona();


  },[misProdcutos])



    return (
      <> 
        <section className="row_cat">
          <div className="col_cat col_cat_inicial ">
          <Link to ={"/category/Variados"}>  <img src={categVariados.img} className=" " alt={""}/></Link>
              <h5 className=" text-center ">{categVariados.categoria}</h5>     
            </div>
          <div className="col_cat  ">
          <Link to ={"/category/Iglesias"}> <img src={categIglesia.img} className=" " alt={categIglesia.categoria}/></Link>
            <h5 className=" text-center">{categIglesia.categoria}</h5>
          </div>
          <div className="col_cat ">
          <Link to ={"/category/Lamparas"}> <img src={categLampara.img} className=" " alt={categLampara.categoria}/></Link>
            <h5 className=" text-center">{categLampara.categoria}</h5>
          </div>
          <div className="col_cat ">
          <Link to ={"/category/Nacimientos"}> <img src={cateNaci.img} className=" " alt={cateNaci.categoria}/></Link>
            <h5 className=" text-center">{cateNaci.categoria}</h5>
          </div>
          <div className="col_cat col_cat_ultimo">
          <Link to ={"/category/Arcas"}> <img src={categArca.img} className=" " alt={categArca.categoria}/></Link>
            <h5 className=" text-center">{categArca.categoria}</h5>
          </div>
          
        </section>
      </>
    );
}

