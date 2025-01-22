import { useEffect, useState } from "react";
import useVisibility from "../hooks/useVisibility"; // Assuming this is your custom hook

type SkillBarProps = {
    title: string;
    maxLevel: number;
    color: string;
};

function SkillBar({ title, maxLevel, color }: SkillBarProps) {
    const [level, setLevel] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const { ref, isVisible } = useVisibility()

    useEffect(() => {
        if (isVisible) {
            setIsTransitioning(true)
            setLevel(maxLevel)
        } else {
            setLevel(0);
            setIsTransitioning(false)
        }
    }, [isVisible, maxLevel])

    return (
        <div ref={ref} className="flex flex-col w-full justify-center gap-2">
            <p className="text-md xl:text-lg">{title}</p>
            <div className="flex flex-col bg-dark/25 dark:bg-black/40 w-full rounded-md h-1">
                <div
                    className={`h-1 rounded-md transition-all duration-1000 ease-in-out ${isTransitioning ? "opacity-100" : "opacity-0"}`}
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
