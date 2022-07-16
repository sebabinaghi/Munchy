import "./ItemCount.css"
import { useState } from "react";

const ItemCount = () => {
    let stock = 10;


const [contador, setNuevoValor] = useState(0);
    if (contador >= 10) alert ("No hay mas stock");
const Sumar = () => {if (contador < stock) {setNuevoValor (contador +1)}};
const Restar = () => {contador > 0 ? setNuevoValor (contador -1) : setNuevoValor (contador)};


return (
    <div className="Contador">
        <p></p>
        <p>{contador}</p>
        <button onClick={Sumar}>+</button>
        <button onClick={Restar}>-</button>
    </div>
)
}

export default ItemCount;