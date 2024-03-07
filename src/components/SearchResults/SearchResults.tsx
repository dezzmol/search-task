import {useSearch} from "./SearchContext";
import {UserCard} from "../UserCard/UserCard";

import "./style.css";

export function SearchResults() {
    const {searchResults} = useSearch();

    return (
        <div className="usersList">
            {searchResults.users.map(user =>
                <UserCard user={user} />
            )}
        </div>
    );
}
