import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

  return (
    <div>
      <h3>ProductDetails</h3>

      {product ? (
        <div style={{ display: "flex" }}>
          <img src={product.thumbnail} alt={product.title} />
          <div style={{ marginTop: "30px" }}>
            <p>$ {product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
