import { createContext, useState } from "react";

export const cartContext = createContext ()

const Provider = (props) => {
    const [carrito, setCarrito] = useState([]);

    const agregarACarrito = (item, contador) => {
         if (estaEnCarrito(item.id)) {
            carrito.map(producto => {
                if(producto.id === item.id){
                    producto.contador= contador
                    setCarrito(carrito)
                }})            
        } else {
            setCarrito([...carrito, {...item, contador}]);
        }
    };

    const estaEnCarrito = (id) => {
        return carrito.some (prod => prod.id === id)
    }

    const borrarProducto = (id) => {
        const productosFiltrados = carrito.filter((prod) => prod.id !== id) 
        setCarrito(productosFiltrados)
    }  
    
    const borrarTodo = () => (
        setCarrito([])
    )

    return (
        <cartContext.Provider value={{carrito, agregarACarrito, borrarTodo, borrarProducto}}>
            {props.children}
        </cartContext.Provider>
    );
};

export default Provider;