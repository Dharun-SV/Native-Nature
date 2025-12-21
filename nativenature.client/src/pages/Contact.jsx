import React from "react";
import "../assets/css/contact.css";
import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        debugger;

        e.preventDefault();

        const response = await fetch("/api/contact/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        alert(data.message);
    };


    return (
        <>
            {/* Breadcrumb Section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Get 24/7 Support</p>
                                <h1>Contact us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-section pt-100 pb-100">
                <div className="container">
                    <div className="row">

                        {/* LEFT: CONTACT FORM */}
                        <div className="col-lg-8 col-md-7">
                            <div className="contact-form-box">
                                <h3>Have you any question?</h3>
                                <p>
                                    Feel free to reach out to us anytime. We’re here to assist you with
                                    product details, order information, or any support you need.
                                </p>

                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="row">

                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-lg-12">
                                            <textarea
                                                name="message"
                                                placeholder="Message"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                    </div>

                                    <button type="submit" className="contact-submit-btn">
                                        SUBMIT
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* RIGHT: SHOP INFO */}
                        <div className="col-lg-4 col-md-5">
                            <div className="contact-info-box">

                                <div className="info-block">
                                    <h4>📍 Shop Address</h4>
                                    <p>
                                        86-107, Sir Thyagaraya Rd,<br />
                                        T. Nagar, Chennai,<br />
                                        Tamil Nadu 600017
                                    </p>
                                </div>

                                <div className="info-block">
                                    <h4>🕒 Shop Hours</h4>
                                    <p>
                                        MON – SUN: 6 AM to 10 AM <br />
                                    </p>
                                </div>

                                <div className="info-block">
                                    <h4>📞 Contact</h4>
                                    <p>
                                        Phone: +91 8270177197 <br />
                                        Email: supportnativenature@gmail.com
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h1>
                                    <i className="fas fa-map-marker-alt location-icon"></i>
                                    <span className="location-text">Find Our Location</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="map-section">
                <iframe
                    title="shop-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9162959022565!2d80.23416977425217!3d13.040999787280763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266541e301de3%3A0x6e38f34f9e1be47e!2sGeetha%20Cafe!5e0!3m2!1sen!2sin!4v1764876667428!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


        </>
    );
}

export default Contact;
