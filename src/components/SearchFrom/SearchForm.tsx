import "./styles.css";
import {useEffect, useState} from "react";
import {useSearch} from "../SearchResults/SearchContext.ts";
import {debounce} from "../debounce/debouncFunc.ts";

export function SearchForm() {
    const { setSearchTerm, setSearchResults } = useSearch();
    const [inputValue, setInputValue] = useState('');

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/users/search?q=${inputValue}`);
        const data = await response.json();
        setSearchResults(data);
    };

    const debouncedFetchData = debounce(fetchData, 500);

    useEffect(() => {
        if (inputValue === '') {
            fetchData();
        } else {
            debouncedFetchData();
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
