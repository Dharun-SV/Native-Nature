import { useRef, useEffect } from "react";
import "../assets/css/ProductSlider.css";

const ProductSlider = ({ products = [] }) => {
    const scrollRef = useRef(null);
    const rafRef = useRef(null);
    const isPaused = useRef(false);

    const speed = 0.25; // pixels per frame -> reduce to move more slowly

    // duplicate items for seamless infinite loop
    const duplicated = [...products, ...products];

    // animation loop
    const loop = () => {
        const container = scrollRef.current;
        if (!container) return;

        if (!isPaused.current) {
            // move by fractional pixels
            container.scrollLeft += speed;

            // When reached the middle (end of original list), jump back by original width
            const half = container.scrollWidth / 2;
            if (container.scrollLeft >= half) {
                // jump back without visual jump because content is duplicated
                container.scrollLeft -= half;
            }
        }

        rafRef.current = requestAnimationFrame(loop);
    };

    const start = () => {
        if (!rafRef.current) rafRef.current = requestAnimationFrame(loop);
    };

    const stop = () => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
    };

    const pauseAutoScroll = () => {
        isPaused.current = true;
        // allow touch/pointer swipes while paused
        scrollRef.current?.classList.add("allow-touch");
    };

    const resumeAutoScroll = () => {
        isPaused.current = false;
        scrollRef.current?.classList.remove("allow-touch");
    };

    useEffect(() => {
        // ensure we start from a safe spot (beginning of original list)
        const container = scrollRef.current;
        if (container) container.scrollLeft = 0;

        start();
        return () => {
            stop();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products.length]); // restart if product count changes

    return (
        <div id="products"  className="product-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h3><span className="orange-text">Our</span> Products</h3>
                            <p>Refresh Your Day the Natural Way, Freshly prepared juices with no preservatives.</p>
                        </div>
                    </div>
                </div>

                <div className="carousel-container">
                    <button
                        className="carousel-btn left"
                        onClick={() => {
                            pauseAutoScroll();
                            // visible jump by cards on button click
                            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
                            setTimeout(resumeAutoScroll, 1200);
                        }}
                    >
                        ‹
                    </button>

                    <div
                        className="product-scroll"
                        ref={scrollRef}
                        // pointer events (works for mouse & touch)
                        onPointerEnter={pauseAutoScroll}
                        onPointerLeave={resumeAutoScroll}
                        onPointerDown={pauseAutoScroll}
                        onPointerUp={resumeAutoScroll}
                        // touch fallback
                        onTouchStart={pauseAutoScroll}
                        onTouchEnd={resumeAutoScroll}
                    >
                        {duplicated.map((item, index) => (
                            <div key={index} className="product-card">
                                <div className="simple-card">
                                    <img src={item.image} alt={item.name} />

                                    <div className="sc-name">{item.name}</div>

                                    <div className="sc-size">{item.size}</div>

                                    <div className="sc-price">₹{item.price}</div>
                                </div>
                            </div>

                        ))}
                    </div>

                    <button
                        className="carousel-btn right"
                        onClick={() => {
                            pauseAutoScroll();
                            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
                            setTimeout(resumeAutoScroll, 1200);
                        }}
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;
