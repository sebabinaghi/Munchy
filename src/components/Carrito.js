import "./Carrito.css";
import { useContext } from "react";
import { cartContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {collection, getDocs, getFirestore, query, where, addDoc} from "firebase/firestore";

const Carrito = () => {
  const {carrito, borrarTodo, borrarProducto} = useContext(cartContext);
  const [items, setItems] = useState([]);
  const {categoria} = useParams();
  const [suma, setSuma] = useState(0)

  const totalCarrito = () => {
    let suma = 0
    carrito.forEach(item => suma += (item.precio * item.contador))
    setSuma(suma)
} 

  const traerProductos = async () => {
  const db = getFirestore();
  getDocs(collection(db, "items")).then((snapshot) => {
      const dataExtraida = snapshot.docs.map ((datos) => datos.data());
      setItems(dataExtraida);
  })
  }

  useEffect (() => {
    traerProductos();
    totalCarrito();
    const db = getFirestore();
    const colleccionQuery = collection(db, "items");
    
    if (categoria) {
          const filtro = query(colleccionQuery, 
          where("categoria", "==", categoria))
          getDocs(filtro)
          .then(res => setItems(res.docs.map(producto => ({categoria: producto.categoria, ...producto.data()}))))
    } else {
          getDocs(colleccionQuery)
          .then(res => setItems(res.docs.map(producto => ({categoria: producto.categoria, ...producto.data()}))))
    }
  },[carrito, categoria]);

  const [Nombre,setNombre]= useState ("")
  const [Apellido,setApellido]= useState ("")
  const [Telefono,setTelefono] = useState ("")
  const [Email,setEmail] = useState ("")

  const crearOrden = () => {
  const db = getFirestore();
  const orderCollectionQuery = collection(db, "ordenes");
  const orden = {
        comprador: {nombre: Nombre, apellido: Apellido, telefono: Telefono, mail: Email},
        items: carrito.map(item => ({nombre: item.nombre, precio: item.precio})),
        total: suma,
  };
  
  addDoc(orderCollectionQuery, orden)
  .then((respuesta) => {
    console.log(respuesta.id);})
    .catch((error) => {
      console.log(error);})
      console.log(orden);
  };

  const [condicion, setCondicion] = useState(false)
  const cambiarCondicion = () => {
    setCondicion(!condicion);
  }

  const Borrar = () => {
    setTimeout(() => {
      borrarTodo();
    }, 5000);
  }

  const TresEnUno =() => {
        cambiarCondicion();
        crearOrden();
        Borrar();
  }
  
  if (carrito.length === 0) {
    return (<><h1>Carrito de compras</h1>
    <h2 className="vacio">El carrito está vacío, volver a <Link to={"/"}>Presentaciones</Link></h2></>) 
  }

    return (
          <div>
            <h1>Carrito de compras</h1>
            {carrito.map ((prod) =>(
              <div className="contenedorProductos">
              
              <div key={prod.id} className="ContenedorItem">
                <div><h2>{prod.nombre}</h2></div>
                <div><img alt="foto" src={prod.foto} width={40}/></div>
                <div><h2>${prod.precio}</h2></div>
                <div><h2>Cantidad:{prod.contador}</h2></div>
                <button onClick={() =>borrarProducto(prod.id)}>Eliminar</button>
              </div>
            </div>
            ))}
            <h3>Total: ${suma}</h3>
            <form>
              <div className="form">
                <p>Completá tus datos para la compra:</p>
                <label>Nombre:<input onChange = {(e)=>{ setNombre(e.target.value)}} type="text" placeholder="Ingrese nombre" name="nombre" required></input></label>
                <label>Apellido:<input onChange = {(e)=>{ setApellido(e.target.value)}} type="text" placeholder="Ingrese apellido" name="apellido" required></input></label>
                <label>Teléfono:<input onChange = {(e)=>{ setTelefono(e.target.value)}} type="number" placeholder="Ingrese teléfono" name="telefono" required></input></label>
                <label>Mail:<input onChange = {(e)=>{ setEmail(e.target.value)}} type="email" placeholder="Ingrese mail" name="mail" required></input></label>
              </div>
            </form> 
            <div className="centrado margen" >
              <div className="Contencion"><button className="compra" onClick={TresEnUno}>crear orden</button></div>
                {!condicion && <h2><span></span></h2>}                            
                {condicion && <h3>Orden creada</h3>}
              <button className="btnComprar" onClick={borrarTodo}>Eliminar todos los productos</button>
            </div>  
          </div>  
  );
};

export default Carrito;