import React, { useState, useEffect, useRef } from 'react';
import { Search, Loader } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  suggestions?: string[];
  debounceTime?: number;
  loading?: boolean;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  onSearch,
  suggestions = [],
  debounceTime = 300,
  loading = false,
  className = '',
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onSearch(newValue);
    }, debounceTime);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleChange(suggestions[selectedIndex]);
    }
  };

  return (
    <div 
      className={`relative ${className}`}
      role="search"
      aria-label="Search"
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        {loading && (
          <Loader className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 animate-spin" />
        )}
        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          role="combobox"
          aria-expanded={isFocused && suggestions.length > 0}
          aria-controls="search-suggestions"
          aria-autocomplete="list"
        />
      </div>

      {isFocused && suggestions.length > 0 && (
        <ul
          id="search-suggestions"
          className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto z-50"
          role="listbox"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              role="option"
              aria-selected={index === selectedIndex}
              className={`px-4 py-2 cursor-pointer transition-colors
                ${index === selectedIndex ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
              onClick={() => handleChange(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;