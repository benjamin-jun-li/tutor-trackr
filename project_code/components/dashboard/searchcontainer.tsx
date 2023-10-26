"use client"
import React, { useState } from 'react';
import Search from "@/components/dashboard/search";

const SearchContainer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Search setSearchQuery={setSearchQuery} />
  );
};

export default SearchContainer;
