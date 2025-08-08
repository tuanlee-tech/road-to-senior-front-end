'use client';


import ProductCard from '@/components/ProductCard';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const products = [
  { id: '1', name: 'Laptop Gaming', price: 1200 },
  { id: '2', name: 'Chuột không dây', price: 50 },
  { id: '3', name: 'Bàn phím cơ', price: 150 },
];

export default function Home() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Danh sách sản phẩm</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Giỏ hàng ({cartItems.length} sản phẩm)</h2>
        <pre className="bg-gray-100 p-4 rounded mt-2">
          {JSON.stringify(cartItems, null, 2)}
        </pre>
      </div>
    </main>
  );
}