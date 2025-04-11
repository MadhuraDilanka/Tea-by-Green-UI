import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BestSellers.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BestSellers = ({ onAddToCart }) => {
  const [bestsellers, setBestsellers] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 4;

  useEffect(() => {
    axios.get("https://localhost:7168/api/products")
      .then(res => {
        const sorted = [...res.data].sort((a, b) => b.price - a.price);
        const top = sorted.slice(0, 8); // Show 8 to support sliding
        setBestsellers(top);

        const qty = {};
        top.forEach(p => qty[p.id] = 1);
        setQuantities(qty);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  const handleQtyChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Math.max(1, parseInt(value) || 1) });
  };

  const handleAdd = (product) => {
    const qty = quantities[product.id] || 1;
    onAddToCart?.({ ...product, quantity: qty });
  };

  return (
    <section className="best-sellers-section">
      <h2>🌟 Best Sellers</h2>
      <div className="product-carousel">
        <button className="arrow" onClick={() => setStartIndex(Math.max(0, startIndex - 1))} disabled={startIndex === 0}>
          <FaChevronLeft />
        </button>
        <div className="bestseller-list">
          {bestsellers.slice(startIndex, startIndex + itemsPerView).map(product => (
            <div className="bestseller-card" key={product.id}>
              <img src={`/product_tea${product.id}.jpg`} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.size}</p>
              <strong>Rs {product.price}</strong>
              <div className="cart-controls">
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) => handleQtyChange(product.id, e.target.value)}
                />
                <button onClick={() => handleAdd(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow" onClick={() => setStartIndex(Math.min(bestsellers.length - itemsPerView, startIndex + 1))} disabled={startIndex + itemsPerView >= bestsellers.length}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default BestSellers;
