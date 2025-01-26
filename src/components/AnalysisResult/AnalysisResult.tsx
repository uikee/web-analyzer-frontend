import React from "react";
import "./AnalysisResult.css"; 

interface AnalysisResultProps {
    result: {
        title: string;
        html_version: string;
        headings: Record<string, number>;
        internal_links: number;
        external_links: number;
        inaccessible_links: number;
        has_login_form: boolean;
    } | null;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
    if (!result) return null;

    const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];

    return (
        <div className="analysis-container">
            <h2 className="analysis-title">Analysis Result</h2>
            <table className="analysis-table">
                <tbody>
                    <tr>
                        <td className="td-label">Title</td>
                        <td className="td-value">{result.title}</td>
                    </tr>
                    <tr>
                        <td className="td-label">HTML Version</td>
                        <td className="td-value">{result.html_version}</td>
                    </tr>
                    <tr>
                        <td className="td-label">Headings</td>
                        <td className="td-value">
                            <table className="sub-table">
                                <tbody>
                                    <tr>
                                        {headingLevels.map((level) => (
                                            <td key={level} className="sub-th">
                                                {level.toUpperCase()}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        {headingLevels.map((level) => (
                                            <td key={level} className="sub-td">
                                                {result.headings[level] || 0}
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-label">Internal Links</td>
                        <td className="td-value">{result.internal_links}</td>
                    </tr>
                    <tr>
                        <td className="td-label">External Links</td>
                        <td className="td-value">{result.external_links}</td>
                    </tr>
                    <tr>
                        <td className="td-label">Inaccessible Links</td>
                        <td className="td-value">{result.inaccessible_links}</td>
                    </tr>
                    <tr>
                        <td className="td-label">Login Form Present</td>
                        <td className="td-value">{result.has_login_form ? "Yes" : "No"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AnalysisResult;