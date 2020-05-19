import React, { useState, useRef, useEffect } from "react";

const FadeInSection = (props) => {
    const [isVisible, setIsVisible] = useState();
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => setIsVisible(entry.isIntersecting)));
        observer.observe(domRef.current);
    }, []);

    return (
        <div 
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export default FadeInSection;