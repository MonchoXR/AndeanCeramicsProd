
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {UseProducto} from '../../hooks/hookProducto';
import { Productos } from '../Producto/Producto';
import { useState,useEffect } from 'react';

import Icono from '../../Assets/Iconos/DualRing.gif';
import { UseProductoFirebase } from '../../hooks/useProductFirebase';


export const ItemDetailContainer = () => {


  // const { items, state } = UseProducto(Productos);
  const { items, state } = UseProductoFirebase()
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(state);

  }, [state]);
  // console.log("itemsContainer nombre",items.nombre);
  return (
    <>
      {loading ? (
      
           <ItemDetail  data={Icono}/>
      
     
      ) : (
        <ItemDetail
       
          data={items.img}
          name={items.nombre}
          stockItem={items.stock}
          key={items.id}
          miId={items.id}
          items={items}
        />
      )}
    </>
  );
};
