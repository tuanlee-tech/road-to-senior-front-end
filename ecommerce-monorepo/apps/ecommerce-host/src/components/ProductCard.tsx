'use client';

import { addToCart } from '@/store/slices/cartSlice';
import { useDispatch } from 'react-redux';

interface Product {
    id: string;
    name: string;
    price: number;
}

export default function ProductCard({ product }: { product: Product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity: 1 }));
    };

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button onClick={handleAddToCart} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Thêm vào giỏ hàng
            </button>
        </div>
    );
}