import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200
            ${currentPage === i
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-gray-900`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center px-3 py-2 rounded-md text-gray-400 
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-gray-900
        ${currentPage === 1
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-gray-800 hover:text-white'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="ml-1 text-sm">Previous</span>
      </button>

      <div className="flex items-center space-x-1">
        {renderPageNumbers()}
      </div>

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center px-3 py-2 rounded-md text-gray-400 
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-gray-900
        ${currentPage === totalPages
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-gray-800 hover:text-white'
        }`}
      >
        <span className="mr-1 text-sm">Next</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;