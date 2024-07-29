// import React from 'react';
// import Navbar from '../components/Navbar';


// const CartPage = ({ cartItems }) => {
//     return (
//         <div className='cart-container'>
//             <h2>Shopping Cart</h2>
//             {cartItems.length === 0 ? (
//                <> <Navbar/>
//                 <p>Your cart is empty</p></>

//             ) : 
            
//             (
//                 <div className='cart-items'>
//                     {cartItems.map((item) => (
//                         <div key={item.id} className='cart-item'>
//                             <img src={item.image} alt={item.title} className='cart-item-img' />
//                             <div>
//                                 <h3>{item.title}</h3>
//                                 <p>₹{item.price}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;
import React from 'react';
import { useCart } from './cartcontext';
import Navbar from '../components/Navbar';
import './cartpage.css'



const CartPage = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="cart-container2625">
           
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
               <><Navbar/>
                <h1>Your cart is empty</h1></> 
            ) : (
                <>
                <Navbar/>
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.title}</h3>
                                <p>₹{item.price}</p>
                                <div className="cart-item-rating">
                                    <span>{item.rating.rate} ★</span>
                                    <span>({item.rating.count} Reviews)</span>
                                </div>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                </>
            )}
        </div>
    );
};

export default CartPage;

