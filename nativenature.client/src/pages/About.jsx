import React from "react";
import "../assets/css/all.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/owl.carousel.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/animate.css";
import "../assets/css/meanmenu.min.css";
import "../assets/css/main.css";
import "../assets/css/responsive.css";
import whatwe from "../assets/img/Juice/WhatWe.png";
import Zip from "../assets/img/Juice/Zip.png";
import Crafted from "../assets/img/Juice/Crafted.png";
import "../assets/css/about.css";

function About() {
    return (
        <>
            {/* Breadcrumb Section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>We sell fresh Juice</p>
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team Section */}
            <div className="mt-150">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title">
                                <h3>Who <span className="orange-text">We Are</span></h3>
                                <p>Native & Nature is a brand committed to delivering pure, organic, and naturally crafted products. We focus on authenticity, quality, and the richness of native ingredients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news pt-100 pb-150">
                        <div className="container">
                            {/*<div className="row">*/}
                            {/*    <div className="col-lg-8 offset-lg-2 text-center">*/}
                            {/*        <div className="section-title">*/}
                            {/*            <h3><span className="orange-text">Our</span> News</h3>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="row">


                                <div className="col-lg-4 col-md-6">
                                    <div className="single-latest-news">

                                        {/* Image added here */}
                                        <img
                                            src={Zip}
                                            alt="Native & Nature"
                                            className="latest-news-img"
                                        />

                                        <div className="news-text-box">
                                            <h3><span className="orange-text">Health in Every Sip</span></h3>
                                            <p className="excerpt">
                                                Our juices are packed with essential vitamins and antioxidants to keep you energized all day.
                                                Prepared without preservatives, colors, or chemicals, each sip brings you closer to a healthier lifestyle.
                                                Perfect for kids, adults, and anyone who wants to choose natural over processed drinks.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-latest-news">

                                        {/* Image added here */}
                                        <img
                                            src={whatwe}
                                            alt="Native & Nature"
                                            className="latest-news-img"
                                        />

                                        <div className="news-text-box">
                                            <h3><span className="orange-text">What We Offer</span></h3>
                                            <p className="excerpt">
                                                100% natural juices made from fresh farm-grown fruits.
                                                Healthy options with no added chemicals or preservatives.
                                                100% natural juices made from fresh farm-grown fruits.
                                                Healthy options with no added chemicals or preservatives.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-latest-news">

                                        {/* Image added here */}
                                        <img
                                            src={Crafted}
                                            alt="Native & Nature"
                                            className="latest-news-img"
                                        />

                                        <div className="news-text-box">
                                            <h3><span className="orange-text">Crafted with Care</span></h3>
                                            <p className="excerpt">
                                                Every product we make goes through a careful, hygienic preparation process to ensure top-notch quality.
                                                We follow traditional methods combined with modern standards to retain natural taste and nutrients.
                                                From sourcing to packing, we prioritize purity, safety, and customer satisfaction in every step.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            <div className="feature-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="featured-text">
                                <h2 className="pb-3">
                                    Why <span className="orange-text">Native & Nature</span>
                                </h2>
                                <div className="row">
                                    {[
                                        { icon: "fas fa-shipping-fast", title: "Home Delivery", desc: "Native & Nature offers fast, free, and hygienic home delivery, bringing fresh organic products straight to your doorstep." },
                                        { icon: "fas fa-money-bill-alt", title: "Best Price", desc: "We offer the best price for all our organic products, ensuring premium quality at an affordable cost for every customer." },
                                        //{ icon: "fas fa-briefcase", title: "Custom Box", desc: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo." },
                                        //{ icon: "fas fa-sync-alt", title: "Quick Refund", desc: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo." },
                                    ].map((item, index) => (
                                        <div className="col-lg-6 col-md-6 mb-4 mb-md-5" key={index}>
                                            <div className="list-box d-flex">
                                                <div className="list-icon">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="content">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;
