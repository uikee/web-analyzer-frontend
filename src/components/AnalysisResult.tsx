import React from "react";

interface AnalysisResultProps {
    result: {
        title: string;
        htmlVersion: string;
        headings: Record<string, number>;
        internalLinks: number;
        externalLinks: number;
        inaccessibleLinks: number;
        hasLoginForm: boolean;
    } | null;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
    if (!result) return null;

    return (
        <div style={styles.container}>
            <h2>Analysis Result</h2>
            <p><strong>Title:</strong> {result.title}</p>
            <p><strong>HTML Version:</strong> {result.htmlVersion}</p>
            <p><strong>Headings:</strong> {JSON.stringify(result.headings)}</p>
            <p><strong>Internal Links:</strong> {result.internalLinks}</p>
            <p><strong>External Links:</strong> {result.externalLinks}</p>
            <p><strong>Inaccessible Links:</strong> {result.inaccessibleLinks}</p>
            <p><strong>Login Form Present:</strong> {result.hasLoginForm ? "Yes" : "No"}</p>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        marginTop: "20px",
        backgroundColor: "#f9f9f9",
    },
} as const;

export default AnalysisResult;