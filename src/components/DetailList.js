import React from "react";
import "./DetailList.css";
import ItemCount from "./ItemCount.js"


const DetailList = ({items}) => {

    return (
       <>
       <div className="productos">
   
                        <div className="Contenedor2">
                            <div><h2>{items.nombre}</h2></div>
                            <div className="foto"><img className="productos2" src={items.foto} alt="fotoProducto"></img></div>
                            <div><h3>{items.descripcion}</h3></div>
                            <div><h2>${items.precio}</h2></div>
                            <div><h3>{items.descripcion2}</h3></div>
                            <div><ItemCount/></div>
                            <div className="boton"><button className="agregar">Agregar a carrito</button></div>
                        </div>
       </div>
       </>
    )
}

export default DetailList;