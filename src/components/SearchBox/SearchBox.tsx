import React, { useState } from "react";
import "./SearchBox.css"; 

interface SearchBoxProps {
    onSearch: (url: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const [url, setUrl] = useState("");

    const handleSearch = () => {
        if (url.trim() === "") {
            alert("Please enter a URL");
            return;
        }
        onSearch(url);
    };

    const isButtonDisabled = url.trim() === "";

    return (
        <div className="searchbox-container">
            <input
                type="text"
                value={url}
                placeholder="Enter URL to analyze"
                onChange={(e) => setUrl(e.target.value)}
                className="searchbox-input"
            />
            <button
                onClick={handleSearch}
                disabled={isButtonDisabled}
                className={`searchbox-button ${
                    isButtonDisabled ? "searchbox-button-disabled" : ""
                }`}
            >
                Analyze
            </button>
        </div>
    );
};

export default SearchBox;