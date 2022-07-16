import "./ItemListContainer.css"
import { Item } from "./Item.js";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList.js";


const ItemListContainer = ({greeting}) => {
      const [items, setItems] = useState([]);
   
      useEffect (() => {
            const traerProductos = new Promise ((res,rej) => {
                  setTimeout(() => {
                        res(Item)
                  }, 2000);
            });
      
      traerProductos.then ((info) => {
            setItems(info);})
      },[]);

      return (    
      <div>
            <h1>{greeting}</h1>
            <ItemList items={items}/>
      </div>
    );
  }
  

export default ItemListContainer;