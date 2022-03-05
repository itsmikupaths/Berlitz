import React, { useState } from 'react';


const AddToCart = (props) => {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("add-cart");

  const showLoading = () => {
    if (loading) return `Loading...`;

    if (mode === "view-cart") {
      return `VIEW CART`;
    };

    return `ADD TO CART`;
  }

  const add = () => {
    if (mode === "view-cart") {
      console.log("VIEW CART");
      return;
    }

    setLoading(true);
    setTimeout(() => { 
      setLoading(false);
      props.setShowMessage(true);
      props.addToCart();
      setMode("view-cart");
    }, 2000);
  }

  return (
    <button onClick={ () => add() }>
      { showLoading()  }
    </button>
  );
}

export default AddToCart;