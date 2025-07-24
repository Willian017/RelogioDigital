import { useEffect, useState } from "react";
import { BiAlarm, BiBell, BiFullscreen } from "react-icons/bi"
import { Link } from 'react-router-dom'

export function Stopwatch(){
    const horas=0
    const minutos=0
    const segundos=0

    return(
        <div className="flex items-center justify-center flex-col h-screen bg-black">
            <div className="flex text-[16rem] font-bold text-white">
                <span className="Hora">{horas}</span>:
                <span className="Minuto">{minutos}</span>:
                <span className="Segundo">{segundos}</span>
            </div>
            <div className="flex">
                <BiAlarm className="icons mr-6"/>
                <BiBell className="icons mr-6"/>
                <BiFullscreen onClick={toggleFullScreen} className="icons mr-6"/>
            </div>
        </div>
    )
}