import { useEffect, useRef, useState } from "react";

type SkillBarProps = {
    title: string;
    maxLevel: number;
    color: string;
}

function SkillBar({ title, maxLevel, color }: SkillBarProps) {
    const [level, setLevel] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setLevel(maxLevel);
                } else {
                    setLevel(0);
                }
            });
        });

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [maxLevel]);

    return (
        <div ref={ref} className="flex flex-col w-full justify-center gap-1">
            <p className="text-lg">{title}</p>
            <div className="flex flex-col bg-black/35 w-full rounded-md h-1">
                <div
                    className={`h-1 rounded-md transition-all duration-1000 ease-in-out`}
                    style={{
                        width: `${level}%`,
                        backgroundColor: color,
                    }}
                ></div>
            </div>
        </div>
    ); 
}

export default SkillBar;
