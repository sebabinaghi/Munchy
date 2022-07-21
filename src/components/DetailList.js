import React from "react";
import "./DetailList.css";
import ItemCount from "./ItemCount.js"
import { Link } from "react-router-dom";
import { useState } from "react";


const DetailList = ({items}) => {
    const [contador, setNuevoValor] = useState(1);

    return (
       <>
       <div className="productos">
   
                        <div className="Contenedor2">
                            <div><h2>{items.nombre}</h2></div>
                            <div className="foto"><img className="productos2" src={items.foto} alt="fotoProducto"></img></div>
                            <div><h3>{items.descripcion}</h3></div>
                            <div><h2>${items.precio}</h2></div>
                            <div><h3>{items.descripcion2}</h3></div>
                            <div><ItemCount contador={contador} setNuevoValor={setNuevoValor}/></div>
                            <div className="boton"><button className="agregar">Agregar a carrito</button></div>
                            <div><Link to={"/carrito"}>
                                <div className="boton"><button className="agregar2">Ver carrito</button></div>
                                </Link></div>
                            </div>
       </div>
       </>
    )
}

export default DetailList;