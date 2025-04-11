import React from "react";
import "./TeaInstruction.css";

const TeaInstruction = () => {
  return (
    <div className="tea-instruction-modern">
      <div className="instruction-image">
        <img src="/instructiontea.jpg" alt="Brew Guide" />
      </div>
      <div className="instruction-text">
        <h2>How to Brew the Perfect Cup</h2>
        <p>Whether you’re new to tea or a seasoned enthusiast, getting the perfect brew is key:</p>
        <ul>
          <li><strong>Water temperature:</strong> Use fresh, filtered water. Don’t boil too hard!</li>
          <li><strong>Steeping time:</strong> Green tea (2–3 mins), Black tea (3–5 mins), Herbal tea (5–7 mins).</li>
          <li><strong>Quantity:</strong> One teaspoon (2g) per cup is ideal.</li>
          <li><strong>Enjoy:</strong> Sip slowly and savor the aroma and taste!</li>
        </ul>
      </div>
    </div>
  );
};

export default TeaInstruction;
