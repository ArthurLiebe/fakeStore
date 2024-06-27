import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Layout() {
    const { cartItems } = useCart();

    return (
        <div>
            <nav className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">eCommerce</Link>
                </div>
                <div className="flex-none">
                    <Link to="/cart" className="btn btn-ghost">
                        Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                    </Link>
                </div>
            </nav>
            <main className="container mx-auto p-4">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;