import React from 'react';
import { useCart } from '../contexts/CartContext';

function ProductCard({ product }) {
    const { addToCart, removeFromCart, cartItems } = useCart();
    const cartItem = cartItems.find(item => item.id === product.id);

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={product.image} alt={product.title} className="h-48 object-contain" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>${product.price.toFixed(2)}</p>
                <div className="card-actions justify-end">
                    {cartItem ? (
                        <div className="flex items-center">
                            <button className="btn btn-sm" onClick={() => removeFromCart(product.id)}>-</button>
                            <span className="mx-2">{cartItem.quantity}</span>
                            <button className="btn btn-sm" onClick={() => addToCart(product)}>+</button>
                        </div>
                    ) : (
                        <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;