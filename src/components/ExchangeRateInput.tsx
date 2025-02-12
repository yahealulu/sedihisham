import React from 'react';
import { DollarSign } from 'lucide-react';

interface ExchangeRateInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const ExchangeRateInput: React.FC<ExchangeRateInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    onChange(value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
      <DollarSign className="text-gray-400" size={24} />
      <div className="flex-1">
        <label htmlFor="exchangeRate" className="block text-sm font-medium text-gray-700 mb-1">
          Exchange Rate (SYP per USD)
        </label>
        <input
          type="number"
          id="exchangeRate"
          value={value}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter exchange rate..."
        />
      </div>
    </div>
  );
}