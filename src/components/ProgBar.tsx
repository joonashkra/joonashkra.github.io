import { useEffect, useState, useRef } from 'react';

function ProgBar() {
    const [scroll, setScroll] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = document.querySelector('.scroll-container') as HTMLElement;

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
            container.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div 
            ref={containerRef}
            className="block h-1 bg-blue transition-all duration-500 ease-in-out" 
            style={{ width: `${scroll}%` }}
        ></div>
    );
}

export default ProgBar;
