import "./ItemListContainer.css"
import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item.js";
import Mock from "./Mock";
import Loader from "./loader";
import { Link, useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
      const [items, setItems] = useState([]);
      const [cargando, setCargando] = useState (true);
      const {categoria} = useParams();
   
      useEffect (() => {
            const traerProductos = new Promise ((res,rej) => {
                  setCargando(true)
                  setTimeout(() => {
                        setCargando(false)
                        res(categoria ? Mock.filter(obj=>obj.categoria === categoria) :Mock)
                  }, 2000);
            });
      
      traerProductos.then ((info) => {
            setItems(info);})
      },[categoria]);

      return (    
            cargando ? <Loader/> :
      <div>
            <h1>{greeting}</h1>
            <div className="Contencion">
                  <Link to={"/presentaciones"}><button className="boton2">TODOS</button></Link>
                  <Link to={"/categoria/obleas"}><button className="boton2">OBLEAS</button></Link>
                  <Link to={"/categoria/vasos"}><button className="boton2">VASOS</button></Link>
            </div>
           
            <Item items={items}/>
      </div>
    );
  }
  

export default ItemListContainer;