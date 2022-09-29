import React from "react";
import ItemDetail from "../../components/ItemDetail/Index";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detalleId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", detalleId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [detalleId]);

  return (
    <>
      <div className="item-detail-container">
        <ItemDetail data={data} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
