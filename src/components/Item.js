import React from "react";
import "./ItemListStyle.css";
import { Link } from "react-router-dom";


const Item = ({items}) => {

    return (
       <>
       <div className="product">
            <div className="Contenedor" key={items.id}>
                <div><h2>{items.nombre}</h2></div>
                <div><img className="productos2" alt="producto" src={items.foto}/></div>
                <div><h3>{items.descripcion}</h3></div>
                <div><h2>${items.precio}</h2></div>
                <div className="boton">
                    <Link to={`/items/${items.id}`}>
                        <button>VER MÁS</button>
                    </Link>
                </div>
            </div>                 
       </div>
       </>
    )
}

export default Item;