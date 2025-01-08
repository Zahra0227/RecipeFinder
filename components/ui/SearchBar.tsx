import { useState } from 'react';

interface SearchBarProps {
    placeholder: string;
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
            <button
                onClick={handleSearch}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
