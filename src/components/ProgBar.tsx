import { useEffect, useState, useRef } from 'react';

function ProgBar() {
    const [scroll, setScroll] = useState(0); 
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = document.querySelector('.scroll-container');
        const checkpoints = [25, 50, 75, 100]; 
        const handleScroll = () => {
            if (container) {
                const y = container.scrollTop;
                const totalY = container.scrollHeight - container.clientHeight;
                const newScroll = (y / totalY) * 100;
    
                const nearest = checkpoints.reduce((prev, curr) => (
                    Math.abs(curr - newScroll) < Math.abs(prev - newScroll) ? curr : prev
                ), checkpoints[0]);
    
                setScroll(nearest);
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
            className="hidden sm:block h-1 bg-blue transition-all duration-500 ease-in-out" 
            style={{ width: `${scroll}%` }}
        ></div>
    );
}

export default ProgBar;
