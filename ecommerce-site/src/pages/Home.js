import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Home() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [categoriesRes, productsRes] = await Promise.all([
                axios.get('https://fakestoreapi.com/products/categories'),
                axios.get('https://fakestoreapi.com/products')
            ]);
            setCategories(categoriesRes.data);
            setProducts(productsRes.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map(category => (
                    <span key={category} className="badge badge-primary">{category}</span>
                ))}
            </div>
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;