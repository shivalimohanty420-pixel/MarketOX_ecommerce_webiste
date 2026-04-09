import React, { useEffect, useState } from 'react';
import './carts.css';
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const userid = localStorage.getItem('userid');
  const nav = useNavigate()

  useEffect(() => {
    if (!userid) { nav("/login"); return; } 

    fetch(`https://dummyjson.com/carts/user/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.carts.length > 0) {
          setCarts(data.carts[0].products);
        }
      });
  }, [userid]);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {carts.length === 0 ? (
        <p className="empty-cart">Your cart is empty <br/> <br/> <b style={{color:"black"}}> SHOP NOW </b> 
        <br/>
         </p>
      ) : (
        <>
          <div className="cart-items">
            {carts.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>

                <img className='item-img' src={item.thumbnail} alt={item.title}></img>

                <div className="item-controls">
                  <button className="btn-quantity"> − </button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="btn-quantity"> + </button>
                </div>

                <p className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button className="btn-remove">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Total Products:</span>

            </div>
            <div className="summary-row">
              <span>Subtotal:</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
            </div>
            <button className="btn-buy-now">Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carts;