import {Searchbar} from "react-native-paper";
import {useState} from "react";

const SearchBar = ({ onSearch }: { onSearch: (value: string) => void }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query: string) => {
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{margin: 16, borderRadius: 10, backgroundColor: "#fff"}}
        />
    );
}

export default SearchBar