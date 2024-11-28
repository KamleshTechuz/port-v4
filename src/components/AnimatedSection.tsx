import { useEffect, useRef, useState } from "react";

const AnimatedSection = ({ children, direction = "up" }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
          transition-all duration-1000 ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : `opacity-0 ${
                  direction === "up" ? "translate-y-20" : "-translate-y-20"
                }`
          }
        `}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
