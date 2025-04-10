import React from "react";
import "./Cart.css";

const Cart = ({ cart, onRemove, isOpen, onClose, onUpdateQty }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? "show" : ""}`} onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        {cart.length === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={`/product_tea${item.id}.jpg`} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <div className="qty-controls">
                    <button onClick={() => onUpdateQty(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQty(item.id, item.quantity + 1)}>+</button>
                    </div>
                  <p>Rs {item.price * item.quantity}</p>
                </div>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            ))}
            <div className="cart-total">
              <strong>Total: Rs {total}</strong>
            </div>
            <div className="checkout">
  <button className="checkout-btn" onClick={() => alert("Proceed to checkout...")}>
    Checkout
  </button>
</div>

          </>
        )}
      </div>
    </>
  );
};

export default Cart;
