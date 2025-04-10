import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import TeaTypesCarousel from "./components/TeaTypesCarousel";
import TeaCategoryPage from "./components/TeaCategoryPage"; // ✅ Use your existing one


const AppContent = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const handleAddToCart = (item) => {
    setCart(prevCart => {
      const existing = prevCart.find(p => p.id === item.id);
      if (existing) {
        return prevCart.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prevCart, item];
    });
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) return handleRemoveFromCart(id);
    setCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: newQty } : item)
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const isHome = location.pathname === "/";

  return (
    <div className="App">
      <Header
        showBanner={isHome} // 👈 Conditionally show animated image
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Routes>
        <Route path="/" element={
          <>
            <TeaTypesCarousel />
            <ProductList onAddToCart={handleAddToCart} />
          </>
        } />
        <Route path="/black-tea" element={<TeaCategoryPage category="Black Tea" onAddToCart={handleAddToCart} />} />
        <Route path="/green-tea" element={<TeaCategoryPage category="Green Tea" onAddToCart={handleAddToCart} />} />
        <Route path="/herbal-tea" element={<TeaCategoryPage category="Herbal Tea" onAddToCart={handleAddToCart} />} />
        <Route path="/gift-sets" element={<TeaCategoryPage category="Gift Set" onAddToCart={handleAddToCart} />} />
      </Routes>

      <Cart
        cart={cart}
        onRemove={handleRemoveFromCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQty={handleUpdateQty}
      />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
