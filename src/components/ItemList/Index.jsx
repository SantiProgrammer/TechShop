import Item from "../Item/Index";
import React from "react";

const ItemList = ({ data = [] }) => {
  if (data.length === 0)
    return (
      <>
        <div className="item-list-loader">
          <img
            src="https://loginportal.funnyjunk.com/gifs/Cool+loading+gif+i+really+liked+this+loading+gif+so_7534dd_5444640.gif"
            alt=""
          />
          <p>Cargando... </p>
        </div>
      </>
    );

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
