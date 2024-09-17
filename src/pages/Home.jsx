import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https:dummyjson.com/products")
      .then((response) => response.json())
      .then((res) => {
        const trendingProducts = res.products.slice(0, 6);
        setProducts(trendingProducts);
      });
  }, []);

  return (
    <div>
      <h2>Home page</h2>
      <span>Trending Products</span>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.thumbnail} />
              <h3>{product.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/products">
        <button style={{ width: "100%", padding: 10 }}>
          View all Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
