import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https:dummyjson.com/products")
      .then((response) => response.json())
      .then((res) => {
        setProducts(res.products);
      });
  }, []);

  return (
    <div>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.thumbnail} />
              <h3>{product.title}</h3>
              <h3>${product.price}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
