import React from "react";
import { useLocation } from "react-router-dom";

const Error = () => {
    const location = useLocation();
    return (
        <div style={{ minHeight: "100vh" }}>
            <p>Page not found for {location.pathname}</p>
        </div>
    );
};

export default Error;