import { useState, useEffect } from "react";


export default function Scrollindicator(){
    const [scroll, setScroll] = useState(0);

    useEffect(()=>{
        const onScorll = ()=> {
            const scrolly = window.scrollY;
            const scroll  = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrolly / scroll) * 100;
            setScroll(scrolled);
        }

        window.addEventListener('scroll',onScorll);

        return window.removeEventListener('scroll',()=>{});

    },[])

    return(
        <div className="scorll-indicator w-full fixed top-0 h-1 z-10 flex justify-start">
            <div className="scroll-line h-full bg-blue-400" style= {{width: `${scroll}%`}}></div>
        </div>
    )
} 