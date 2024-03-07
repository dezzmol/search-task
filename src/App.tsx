import {useState} from "react";
import {SearchForm} from "./components/SearchFrom/SearchForm";
import {SearchContext} from "./components/SearchResults/SearchContext";
import {SearchResults} from "./components/SearchResults/SearchResults";
import {ResponseEntity} from "./components/types/ResponseEntity.ts";

export default function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<ResponseEntity>({limit: 0, skip: 0, total: 0, users: []});

    return (
        <SearchContext.Provider value={{searchTerm, setSearchTerm, searchResults, setSearchResults}}>
            <SearchForm/>
            <SearchResults/>
        </SearchContext.Provider>
    );
}
