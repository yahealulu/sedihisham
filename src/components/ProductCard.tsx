import React from 'react';

interface ProductItem {
  name: string;
  price: number;
  pieces: number;
}

interface ProductCardProps {
  item: ProductItem;
  exchangeRate: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, exchangeRate }) => {
  const totalSyp = item.price * exchangeRate;
  const perPieceSyp = totalSyp / item.pieces;

  return (
    <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex-1">
        <span className="text-lg text-gray-700">{item.name}</span>
        <div className="text-sm text-gray-500">
          {item.pieces > 1 ? `${item.pieces} pieces per package` : 'Single piece'}
        </div>
      </div>
      <div className="text-right space-y-1">
        <div className="text-lg font-semibold text-blue-600">
          ${item.price.toFixed(2)}
        </div>
        <div className="text-sm text-gray-500">
          {totalSyp.toLocaleString()} SYP
        </div>
        <div className="text-sm font-medium text-green-600">
          {perPieceSyp.toLocaleString()} SYP/piece
        </div>
      </div>
    </div>
  );
}