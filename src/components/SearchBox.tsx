import React, { useState } from "react";

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

    return (
        <div style={styles.container}>
            <input
                type="text"
                value={url}
                placeholder="Enter URL to analyze"
                onChange={(e) => setUrl(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleSearch} style={styles.button}>
                Analyze
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
    },
    input: {
        width: "300px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
     padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
    },
} as const;

export default SearchBox;
