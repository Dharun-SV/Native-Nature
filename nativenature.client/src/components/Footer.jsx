function Footer() {
    return (
        <>
            {/* Footer */}
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>
                                    Native & Nature brings you fresh, natural juices made from
                                    daily-picked fruits and vegetables. We prepare every juice just
                                    2 hours before serving to ensure purity, taste, and quality.
                                    With a focus on health, hygiene, and authenticity, we deliver
                                    nature in every sip.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>
                                        Dynamic Apartments, 15 Parangusapuram St, Azeez Nagar, West
                                        Mambalam, Chennai, Tamil Nadu 600024
                                    </li>
                                    <li>supportnativenature@gmail.com</li>
                                    <li>+91 8270177197</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-box subscribe">
                                <h2 className="widget-title">Quick Links</h2>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about">About us</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>
                                Copyrights &copy; 2025 -{' '}
                                <a href="">Native&Nature</a>, All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-12 text-end">
                            <div className="social-icons">
                                <ul>
                                    <li>
                                        <a href="#" target="_blank" rel="noreferrer">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" rel="noreferrer">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" rel="noreferrer">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" rel="noreferrer">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" rel="noreferrer">
                                            <i className="fab fa-dribbble" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
