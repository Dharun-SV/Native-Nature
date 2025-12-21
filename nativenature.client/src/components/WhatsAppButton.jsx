import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../assets/css/WhatsappLogo.css";

const WhatsAppButton = () => {
    const phoneNumber = "8270177197"; 
    const message = "Hello! I would like to chat with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
        >
            <FaWhatsapp size={30} color="white" />
        </a>
    );
};

export default WhatsAppButton;
