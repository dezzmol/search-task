import "./styles.css";
import {useEffect, useState} from "react";
import {useSearch} from "../SearchResults/SearchContext.ts";

export function SearchForm() {
    const { setSearchTerm, setSearchResults } = useSearch();
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/users/search?q=${inputValue}`);
            const data = await response.json();
            setSearchResults(data);
        };

        if (inputValue === '') {
            fetchData();
        } else {
            const timeoutId = setTimeout(() => fetchData(), 300);
            return () => clearTimeout(timeoutId);
        }
    }, [inputValue, setSearchResults]);

    return (
        <div className="searchForm">
            <form>
                <input type="text" value={inputValue} onChange={event => {
                    setInputValue(event.target.value)
                    setSearchTerm(event.target.value)
                }}/>
            </form>
        </div>
    );
}
