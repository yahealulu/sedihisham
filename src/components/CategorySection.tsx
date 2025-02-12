import React from 'react';
import { ProductCard } from './ProductCard';

interface Product {
  name: string;
  price: number;
  pieces: number;
}

interface CategorySectionProps {
  category: string;
  items: Product[];
  exchangeRate: number;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, items, exchangeRate }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
      <div className="grid gap-4">
        {items.map((item, index) => (
          <ProductCard key={index} item={item} exchangeRate={exchangeRate} />
        ))}
      </div>
    </div>
  );
}