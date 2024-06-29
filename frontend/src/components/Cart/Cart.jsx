import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map((item, index) => (
        <div key={index}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
