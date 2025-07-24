import { useEffect, useState } from "react";
import { BiAlarm, BiBell, BiFullscreen } from "react-icons/bi"

export function Clock() {
    const [horaAtual, setHoraAtual] = useState<Date>(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
        setHoraAtual(new Date()); 
        }, 1000);

        return () => clearInterval(intervalo); 
    }, []);

    const formatar = (valor: number) => String(valor).padStart(2, '0');

    const horas = formatar(horaAtual.getHours());
    const minutos = formatar(horaAtual.getMinutes());
    const segundos = formatar(horaAtual.getSeconds());

    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Erro ao tentar entrar em tela cheia: ${err.message} (${err.name})`)
        })
        } else {
        document.exitFullscreen()
        }
    };

    useEffect(() => {
        const onFullScreenChange = () => {
        setIsFullScreen(!!document.fullscreenElement)}

    document.addEventListener('fullscreenchange', onFullScreenChange)

    return () => document.removeEventListener('fullscreenchange', onFullScreenChange)
    }, [])

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