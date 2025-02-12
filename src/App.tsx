import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ExchangeRateInput } from './components/ExchangeRateInput';
import { CategorySection } from './components/CategorySection';
import { products } from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [exchangeRate, setExchangeRate] = useState(15000);

  const filteredProducts = products
    .map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800">Product Catalog</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <ExchangeRateInput value={exchangeRate} onChange={setExchangeRate} />
        </div>

        <div className="grid gap-8">
          {filteredProducts.map((category, index) => (
            <CategorySection
              key={index}
              category={category.category}
              items={category.items}
              exchangeRate={exchangeRate}
            />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2025 yahyaloulou. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
