import React from "react";
import Item from "./Item";
import "./ItemList.css";


const ItemList = ({items}) => {
    return (
      <>
      <div className="ploi">
        {
            items.map((items) => (
                <Item items={items} key={items.id}/>
            ))
        }
      </div>
        
      </>
    )
}

export default ItemList;