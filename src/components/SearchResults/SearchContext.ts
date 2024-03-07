import {createContext, useContext} from "react";
import {ResponseEntity} from "../types/ResponseEntity.ts";

interface SearchContextType {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    searchResults: ResponseEntity;
    setSearchResults: React.Dispatch<React.SetStateAction<ResponseEntity>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}