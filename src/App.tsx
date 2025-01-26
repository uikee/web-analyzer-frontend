import React, { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import AnalysisResult from "./components/AnalysisResult/AnalysisResult";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"; 
import { analyzePage } from "./services/api";
import "./App.css"; 

const App: React.FC = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<{ status: number; message: string } | null>(null);

    const handleSearch = async (url: string) => {
        setResult(null);
        setError(null);

        setLoading(true);
        try {
            const data = await analyzePage(url);
            setResult(data);
        } catch (err: any) {
            const status = err?.response?.status || "Unknown";
            const message = err?.response?.data?.error || "Failed to analyze the URL. Please try again.";
            setError({ status, message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">
            <h1>Web Analyzer</h1>
            <SearchBox onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <ErrorMessage status={error.status} message={error.message} />} 
            <AnalysisResult result={result} />
        </div>
    );
};

export default App;
