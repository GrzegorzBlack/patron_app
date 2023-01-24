import React, { useState, createContext } from 'react';

export const SearchParamsContext = createContext();

export const SearchParamsProvider = ({ children }) => {



  const [searchParams, setSearchParams] = useState({
    limit: 10,
    searchText: '',
    results: []
  });





  return (
    <SearchParamsContext.Provider value={[searchParams, setSearchParams]}>
      {children}
    </SearchParamsContext.Provider>
  );
}