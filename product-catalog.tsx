import React, { useState } from 'react';
import { Search, DollarSign } from 'lucide-react';

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [exchangeRate, setExchangeRate] = useState(15000);

  const products = [
    { category: "Ghee & Oils", items: [
      { name: "سمنة غنم ١ كغ ٦ قطع", price: 96.60, pieces: 6 },
      { name: "سمنة غنم ٥٠٠غ ٦ قطع", price: 49.86, pieces: 6 },
      { name: "سمنة بقري ١كغ ٦ قطع", price: 79.20, pieces: 6 },
      { name: "سمنة بقري ٥٠٠غ ٦ قطع", price: 41.10, pieces: 6 },
      { name: "نباتي ١ كغ ٦ قطع", price: 14.836, pieces: 6 },
      { name: "نباتي ٢ كغ ٦ قطع", price: 29.586, pieces: 6 },
      { name: "زيت زيتون ٢٥٠غ صندوق ١٢ قطعة", price: 17.286, pieces: 12 },
      { name: "زيت زيتون ٥٠٠غ", price: 31.736, pieces: 1 },
      { name: "زيت زيتون ١ لتر", price: 61.486, pieces: 1 },
      { name: "زيت زيتون ٢ ليتر", price: 59.286, pieces: 1 },
      { name: "دوار ١ ليتر", price: 19.75, pieces: 1 },
      { name: "دوار ٤ ليتر", price: 25.85, pieces: 1 }
    ]},
    { category: "Rice & Grains", items: [
      { name: "رز اسباني", price: 15.921, pieces: 10 },
      { name: "رز تايلندي", price: 8.321, pieces: 10 },
      { name: "رز بيوت شام", price: 9.036, pieces: 10 },
      { name: "رز بسمتي شوال ٢٠ك هشام", price: 31.571, pieces: 20 },
      { name: "رز غولدن شوال ٢٠ك", price: 33.071, pieces: 20 },
      { name: "رز كريمي طرد ١٢ك", price: 20.186, pieces: 12 },
      { name: "برغل سيد هشام", price: 6.271, pieces: 10 }
    ]},
    { category: "Tea", items: [
      { name: "شاي ٥ك هشام", price: 45.15, pieces: 1 },
      { name: "شاي ٩٠غ طرد ١٠٠ قطعة", price: 92.25, pieces: 100 },
      { name: "شاي ١٠٠ ظرف طرد ١٨ قطعة", price: 50.25, pieces: 18 },
      { name: "شاي ٢٥ ظرف طرد ٤٨ قطعة", price: 35.15, pieces: 48 },
      { name: "شاي ٤٥٠غ ٢٠ قطعة", price: 87.75, pieces: 20 }
    ]},
    { category: "Legumes", items: [
      { name: "عدس مجروش", price: 9.171, pieces: 10 },
      { name: "عدس فحل ٥ قطع", price: 8.371, pieces: 5 },
      { name: "عدس اسود", price: 9.571, pieces: 10 },
      { name: "فاصوليا حب", price: 9.321, pieces: 5 },
      { name: "فاصوليا عريضة", price: 9.871, pieces: 5 },
      { name: "فول ٥ قطع", price: 8.336, pieces: 5 },
      { name: "حمص", price: 13.671, pieces: 10 }
    ]},
    { category: "Other Products", items: [
      { name: "طحين ٥ قطع", price: 3.071, pieces: 5 },
      { name: "سميد ٥ قطع", price: 3.821, pieces: 5 },
      { name: "قمح ٥ قطع", price: 3.321, pieces: 5 },
      { name: "شوفان ٦ قطع", price: 5.086, pieces: 6 },
      { name: "كشك ١ك طرد ٦ قطع", price: 17.286, pieces: 6 },
      { name: "كشك ٥٠٠غ ٦ قطع", price: 8.643, pieces: 6 },
      { name: "سكر طرد", price: 7.214, pieces: 10 },
      { name: "زعتر ٤٠٠غ طرد ١٢ عبوة", price: 11.793, pieces: 12 },
      { name: "زعتر فلسطيني ٤٠٠غ", price: 7.693, pieces: 1 },
      { name: "زعتر بيتي ١٠ك", price: 22.571, pieces: 10 },
      { name: "بندورة ٦٦٠غ ١٢ قطعة", price: 13.286, pieces: 12 },
      { name: "بندورة ٣٧٥غ ١٢ قطعة", price: 8.536, pieces: 12 }
    ]}
  ];

  const filteredProducts = products.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const handleExchangeRateChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setExchangeRate(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Product Catalog</h1>
        
        <div className="space-y-4 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 top-4 text-gray-400" size={24} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <DollarSign className="text-gray-400" size={24} />
            <div className="flex-1">
              <label htmlFor="exchangeRate" className="block text-sm font-medium text-gray-700 mb-1">
                Exchange Rate (SYP per USD)
              </label>
              <input
                type="number"
                id="exchangeRate"
                value={exchangeRate}
                onChange={handleExchangeRateChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter exchange rate..."
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {filteredProducts.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category.category}</h2>
              <div className="grid gap-4">
                {category.items.map((item, itemIndex) => {
                  const totalSyp = item.price * exchangeRate;
                  const perPieceSyp = totalSyp / item.pieces;
                  
                  return (
                    <div key={itemIndex} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
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
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
