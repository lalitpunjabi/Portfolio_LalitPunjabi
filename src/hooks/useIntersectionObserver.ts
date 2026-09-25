import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options: IntersectionObserverInit = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasRendered, setHasRendered] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef(options);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                setHasRendered(true); // Keep it true once it intersects
            }
        }, { threshold: 0.1, ...optionsRef.current });

        const element = elementRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return { elementRef, isIntersecting, hasRendered };
}
