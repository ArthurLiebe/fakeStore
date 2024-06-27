import React from 'react';
import { useCart } from '../contexts/CartContext';

function Cart() {
    const { cartItems, addToCart, removeFromCart } = useCart();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button className="btn btn-sm mr-2" onClick={() => removeFromCart(item.id)}>-</button>
                                <button className="btn btn-sm" onClick={() => addToCart(item)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-right font-bold">Total:</td>
                        <td colSpan="2" className="font-bold">${total.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Cart;