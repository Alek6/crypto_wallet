import { useState } from 'react';
import ChevronDown from "@icons/ChevronDown";
import ChevronUp from "@icons/ChevronUp";

export default function Accordion({title, content}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item rounded-[8px] border-2">
            <div className={isActive ? "accordion-title flex justify-between items-center bg-bgSecondary" : "accordion-title flex justify-between items-center"} onClick={() => setIsActive(!isActive)}>
                <h1 className="py-3 px-5 font-bold text-xl">{title}</h1>
                <span className="p-2 text-2xl">{isActive ? <ChevronUp/> : <ChevronDown/>}</span>
            </div>
            {isActive && <div className="accordion-content text-text p-5">{content}</div>}
        </div>
    )
}