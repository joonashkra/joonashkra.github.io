import { useEffect, useState, useRef } from "react";

function ProgBar() {
  const [scroll, setScroll] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = document.querySelector(
      ".scroll-container",
    ) as HTMLElement;

    const handleScroll = () => {
      if (container) {
        const y = container.scrollTop;
        const totalY = container.scrollHeight - container.clientHeight;
        const newScroll = (y / totalY) * 100;

        if (newScroll < 25) {
          setScroll(25);
        } else if (newScroll < 50) {
          setScroll(50);
        } else if (newScroll < 75) {
          setScroll(75);
        } else {
          setScroll(100);
        }
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden md:block h-1.5 md:h-2 dark:bg-lightblue bg-blue transition-all duration-500 ease-in-out shadow-sm"
      style={{ width: `${scroll}%` }}
    ></div>
  );
}

export default ProgBar;
