
// 
import {Item} from '../Item/Item'

export const ItemList=({items})=>{

    return (
      <>
   
                  {
                  items.map(elementos => (
                    // <Link key={elementos.id} to={`/item/${elementos.id}`}>
                    //      <Item productos={elementos}  />
                    // </Link>
                     <Item key={elementos.id} productos={elementos}   items={items}/>
                  ))
                  }
  
      </>
    );
}

