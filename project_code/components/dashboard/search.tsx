// File: components/dashboard/search.tsx

import { Input } from "@/components/ui/input";
import React from "react";
interface SearchProps {
  setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchQuery }) => {

  const [localQuery, setLocalQuery] = React.useState('');

  const handleSearch = () => {
    setSearchQuery(localQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value);
  };

  return (
    <div className="flex">
      <input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
        value={localQuery}
        onChange={handleInputChange}
      />
      <button 
        onClick={handleSearch} 
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
      <button 
        onClick={() => setSearchQuery('')} 
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Clear
      </button>
    </div>
  );
}

export default Search;
