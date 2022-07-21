import "./ItemCount.css"

const ItemCount = ({contador, setNuevoValor}) => {
    let stock = 10;  

return (
    <div className="Contador">
        <p>{contador}</p>
        <button onClick={()=> setNuevoValor (contador +1)}>+</button>
        <button onClick={()=> setNuevoValor (contador -1)}>-</button>
    </div>
)
}

export default ItemCount;