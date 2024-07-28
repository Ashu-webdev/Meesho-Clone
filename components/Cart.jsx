// import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const totalProductPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const additionalFees = 62; // Assuming the additional fees are fixed
  const orderTotal = totalProductPrice + additionalFees;

  return (
    <div className="cart">
      <h2>Product Details</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="container">
            <div className="prodbuy">
              <div className="t1">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <p>{item.title}</p>
                      <p>Rs {item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="delete-button">X Remove</button>
                  </li>
                ))}
              </div>
            </div>
            <hr />
            <h1>Price Details</h1>
            <div className="prodbuy1">
              <div className="price-details">
                <p>Total Product Price: Rs {totalProductPrice.toFixed(2)}</p>
                <p>Additional Fees: Rs {additionalFees.toFixed(2)}</p>
                <p className='total'>Order Total: Rs {orderTotal.toFixed(2)}</p>
              </div>
              <p><button onClick={() => addToCart(product)}>Continue</button></p>
            </div>
          </div>
          <h3 className="gt">Total: Rs {orderTotal.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;