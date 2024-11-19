import { useRef, useState } from "react"
import { LoveItProps } from "../../../Interfaces/Blog.interfaces"

export const LoveIt = ({ Value, SetValue }: LoveItProps) => {

    const [LoveIt, setLoveIt] = useState<boolean>(Value)
    const divElemento = useRef<HTMLDivElement>(null)

    const onHandleClick = () => {
        setLoveIt(!LoveIt)
        SetValue(!LoveIt)
    }

    return (
        <button className="text-[#D1D5DB] w-[40px] h-[40px] grid place-content-center rounded-xl" onClick={onHandleClick}>
            <div ref={divElemento} className={`heart ${LoveIt && "is-active"}`}></div>
        </button>
    )
}
