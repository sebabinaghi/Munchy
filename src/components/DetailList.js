import React from "react";
import "./DetailList.css";


const DetailList = ({items}) => {

    return (
       <>
       <div className="productos">
         {
                items.map((ItemDetail) => {
                    return (
                        <div className="Contenedor2">
                            <div><h2>{ItemDetail.nombre}</h2></div>
                            <div className="foto"><img className="productos2" src={ItemDetail.foto} alt="fotoProducto"></img></div>
                            <div><h3>{ItemDetail.descripcion}</h3></div>
                            <div><h2>${ItemDetail.precio}</h2></div>
                            <div><h3>{ItemDetail.descripcion2}</h3></div>
                        </div>
                        
                    )
                })
            }
       </div>
           
       </>
    )
}

export default DetailList;