import "./ItemListContainer.css"
import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item.js";
import Mock from "./Mock";
import Loader from "./loader";


const ItemListContainer = ({greeting}) => {
      const [items, setItems] = useState([]);
      const [cargando, setCargando] = useState (true)
   
      useEffect (() => {
            const traerProductos = new Promise ((res,rej) => {
                  setCargando(true)
                  setTimeout(() => {
                        res(Mock)
                        setCargando(false)
                  }, 2000);
            });
      
      traerProductos.then ((info) => {
            setItems(info);})
      },[]);

      return (    
            cargando ? <Loader/> :
      <div>
            <h1>{greeting}</h1>
            <Item items={items}/>
      </div>
    );
  }
  

export default ItemListContainer;