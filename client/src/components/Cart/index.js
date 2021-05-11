import React from 'react';
import CartItem from './CartItem';
import Auth from '../../utils/auth';
import './style.css';
import useStoreContext from '../../utils/GlobalState';
import  { TOGGLE_CART } from '../../utils/actions';

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    
    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    if(!state.cartOpen) {
        return(
            <div className="cart-closed" onClick={toggleCart}>
                <span 
                    role="img"
                    aria-labelledby="trash">🛒</span>
            </div>
        )
    }

    return (
        <div className="cart">
            <div className="close" onClick={toggle-cart}>[close]</div>
            <h2>Shopping Cart</h2>
            <div>
                <CartItem item={{ name: 'Camera', image: 'camera.jpg', price: 5, purcaseQuantity: 3 }} />
                <CartItem item={{ name: 'Soap', image: 'soap.jpg', price: 6, purachaseQuantity: 4 }} />

                <div className="flex-row space-between">
                    <strong>Total: $0</strong>
                    {
                        Auth.loggedIn() ?
                            <button>Checkout</button>
                            :
                            <span>(log in to check out)</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
