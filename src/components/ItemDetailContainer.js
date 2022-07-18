import Mock  from "./Mock.js";
import DetailList from "./DetailList.js";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./loader.js";

const ItemDetailContainer = ({greeting}) => {
      const [items2, setItems] = useState([]);
      const {id} = useParams()
      const [cargando, setCargando] = useState (true)

      const traerItemPorId = () => {
            return new Promise ((resolve)=> {
                  setCargando(true)
                  setTimeout (()=> {
                        resolve(Mock.find(obj => obj.id === id))
                        setCargando(false)
                  }, 1000)
            })
      }
   
      useEffect (()=> {
            traerItemPorId().then(respuesta => {
                  setItems(respuesta)
            })
      },[id])

      // useEffect (() => {
      //       const traerProductos2 = new Promise ((res,rej) => {
      //             setTimeout(() => {
      //                   res(Mock)
      //             }, 2000);
      //       });
      
      // traerProductos2.then ((info) => {
      //       setItems(info);})
      // },[]);

      return (    
            cargando ? <Loader/> :
      <div>
          <DetailList items={items2}/>
      </div>
    );
  }
  

export default ItemDetailContainer;