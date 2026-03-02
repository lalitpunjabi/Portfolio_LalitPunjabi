import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasRendered, setHasRendered] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                setHasRendered(true); // Keep it true once it intersects
            }
        }, { threshold: 0.1, ...options });

        const element = elementRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return { elementRef, isIntersecting, hasRendered };
}
