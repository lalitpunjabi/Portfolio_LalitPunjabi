import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / scrollHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 z-50 
                     w-10 h-10 flex items-center justify-center
                     rounded-full 
                     bg-accent-primary/10 
                     border border-accent-primary/20
                     text-accent-primary
                     hover:bg-accent-primary 
                     hover:text-bg-main
                     transition-all duration-300 
                     shadow-md backdrop-blur-sm"
        >
          <ArrowUp
            size={16}
            className="transition-transform duration-200 hover:-translate-y-0.5"
          />

          <svg
            className="absolute inset-0"
            width="40"
            height="40"
          >
            <circle
              cx="20"
              cy="20"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.5"
            />
            <circle
              cx="20"
              cy="20"
              r={radius}
              fill="none"
              stroke="rgba(0,229,255,0.7)"
              strokeWidth="1.5"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.2s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>
        </button>
      )}
    </>
  );
}