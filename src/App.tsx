import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import AnalysisResult from "./components/AnalysisResult";
import { analyzePage } from "./services/api";

const App: React.FC = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (url: string) => {
        setLoading(true);
        setError("");
        try {
            const data = await analyzePage(url);
            setResult(data);
        } catch (err: any) {
            setError("Failed to analyze the URL. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.app}>
            <h1>Web Analyzer</h1>
            <SearchBox onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p style={styles.error}>{error}</p>}
            <AnalysisResult result={result} />
        </div>
    );
};

const styles = {
    app: {
        textAlign: "center",
        margin: "20px",
    },
    error: {
        color: "red",
    },
} as const;

export default App;