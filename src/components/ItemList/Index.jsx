import Item from "../Item/Index";
import React from "react";

const ItemList = ({ data = [] }) => {
  if (data.length === 0)
    return (
      <>
        <div className='item-list-loader' >
          <img className="rings" src='/rings.svg' alt='' />
          <p>Cargando... </p>
        </div>
      </>
    )

  return (
    <>
      <div className="item-list">
        {data.map((product) => (
          <Item key={product.id} info={product} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
