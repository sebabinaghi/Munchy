import Mock  from "./Mock.js";
import DetailList from "./DetailList.js";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({greeting}) => {
      const [items2, setItems] = useState([]);
      const {id} = useParams()

      const traerItemPorId = () => {
            return new Promise ((resolve)=> {
                  setTimeout (()=> {
                        resolve(Mock.find(obj => obj.id === id))
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
      <div>
          <DetailList items={items2}/>
      </div>
    );
  }
  

export default ItemDetailContainer;