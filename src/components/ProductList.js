import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 4;

  useEffect(() => {
    axios.get("https://localhost:7168/api/products")
      .then(res => {
        setProducts(res.data);
        const initialQuantities = {};
        res.data.forEach(p => initialQuantities[p.id] = 1);
        setQuantities(initialQuantities);
      })
      .catch(err => console.error("API Error:", err.response?.data || err));
  }, []);

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    onAddToCart?.({ ...product, quantity });
  };

  const handleQtyChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Math.max(1, parseInt(value) || 1) });
  };

  return (
    <div className="product-carousel-wrapper">
      <h2 className="carousel-title">Our Tea Products</h2>
      <div className="product-carousel">
        <button className="arrow" onClick={() => setStartIndex(Math.max(0, startIndex - 1))} disabled={startIndex === 0}>
          <FaChevronLeft />
        </button>

        <div className="product-list">
          {products.slice(startIndex, startIndex + itemsPerView).map(product => (
            <div className="product-card" key={product.id}>
              <img
                src={`/product_tea${product.id}.jpg`}
                alt={product.name}
                className="product-img"
              />
              <h3>{product.name}</h3>
              <p>{product.type} - {product.size}</p>
              <p><strong>Rs {product.price}</strong></p>
              <div className="cart-controls">
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) => handleQtyChange(product.id, e.target.value)}
                />
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow" onClick={() => setStartIndex(Math.min(products.length - itemsPerView, startIndex + 1))} disabled={startIndex + itemsPerView >= products.length}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
