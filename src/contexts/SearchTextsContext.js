import React, { useState, createContext } from 'react';

export const SearchTextsContext = createContext();

export const SearchTextsProvider = ({ children }) => {
    const [searchTexts, setSearchTexts] = useState(() => {
            const saved = localStorage.getItem("searchHistory");
            const initialValue = JSON.parse(saved);
            return initialValue || [];
        });
    return (
        <SearchTextsContext.Provider value={[searchTexts, setSearchTexts]}>
            {children}
        </SearchTextsContext.Provider>
    );
}