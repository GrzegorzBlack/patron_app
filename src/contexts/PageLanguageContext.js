import React, { useState, createContext } from 'react';

export const PageLanguageContext = createContext();

export const PageLanguageProvider = ({ children }) => {
    const [pageLanguages, setPageLanguages] = useState([]);
    return (
        <PageLanguageContext.Provider value={[pageLanguages, setPageLanguages]}>
            {children}
        </PageLanguageContext.Provider>
    );
}