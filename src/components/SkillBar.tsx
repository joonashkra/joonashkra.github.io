
type SkillBarProps = {
    title: string,
    level: number,
    color: string
}

function SkillBar({title, level, color}: SkillBarProps) {
  return (
    <div className="flex flex-col w-full justify-center gap-1">
        <p>{title}</p>
        <div className="flex flex-col bg-black/50 w-full rounded-md h-2">
            <div className="h-2 rounded-md" style={{width: `${level}%`, backgroundColor: `${color}`}}></div>
        </div>
    </div>
  )
}

export default SkillBar
