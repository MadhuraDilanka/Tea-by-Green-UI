import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TeaCategoryPage.css";

const TeaCategoryPage = ({ category, onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get("https://localhost:7168/api/products")
      .then(res => {
        const filtered = res.data.filter(p => p.type === category);
        setProducts(filtered);

        // Set default quantity 1 for each
        const qty = {};
        filtered.forEach(p => qty[p.id] = 1);
        setQuantities(qty);
      })
      .catch(err => console.error("API Error:", err));
  }, [category]);

  const handleQtyChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, parseInt(value) || 1)
    }));
  };

  const handleAdd = (product) => {
    const qty = quantities[product.id] || 1;
    onAddToCart?.({ ...product, quantity: qty });
  };

  return (
    <div className="category-page">
      <h2>{category}</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={`/product_tea${product.id}.jpg`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.size}</p>
            <strong>Rs {product.price}</strong>
            <div className="cart-controls">
              <input
                type="number"
                value={quantities[product.id] || 1}
                min="1"
                onChange={(e) => handleQtyChange(product.id, e.target.value)}
              />
              <button onClick={() => handleAdd(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeaCategoryPage;
