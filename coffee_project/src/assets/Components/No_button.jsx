import { useEffect, useState } from "react";
import './No_button.css'


function No_button() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const Interval = setInterval(() => {
            setPosition(prevPosition => ({
                x: Math.floor(Math.random() * window.innerWidth),
                y: Math.floor(Math.random() * window.innerHeight)
            }))
            
        }, 350)

        return (() => clearInterval(Interval))
    }, [])

    const buttonStyle = {
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
    };
    return (
       
        <button
            style={buttonStyle}
        >No! I dont want to! </button>
    )

}

export default No_button;