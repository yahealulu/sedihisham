import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Search className="absolute right-4 top-4 text-gray-400" size={24} />
    </div>
  );
}