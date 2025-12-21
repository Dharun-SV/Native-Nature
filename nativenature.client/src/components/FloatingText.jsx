import React from "react";
import "../assets/css/FloatingText.css";

const FloatingText = () => {
    return (
        <div className="floating-container">
            <div className="bubbles">
                {[...Array(6)].map((_, i) => (
                    <span key={i}></span>
                ))}
            </div>
        </div>
    );
};

export default FloatingText;
