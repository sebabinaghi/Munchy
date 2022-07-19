import "../components/CartWidget.css"

const CartWidget = () => {
    return (
        <>
        <button className="boton-carrito">
             <div className="separa2">
                <div><img className="Logo" src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png" alt="LogoCarrito"></img></div>
                <div><span id="contadorCarrito">0</span></div>
            </div>
        </button>
        </>
        
    ) 
    
}

export default CartWidget;