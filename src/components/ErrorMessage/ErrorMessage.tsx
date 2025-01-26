import React from "react";
import "./ErrorMessage.css";

interface ErrorMessageProps {
    status: number;
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ status, message }) => {
    return (
        <div className="error-card">
            <p><strong>Status Code:</strong> {status}</p>
            <p><strong>Error Message:</strong> {message}</p>
        </div>
    );
};

export default ErrorMessage;
