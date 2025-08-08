import { BiAlarm, BiBell, BiCaretRight, BiFullscreen } from "react-icons/bi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function Stopwatch() {
    const formatar = (valor: number) => String(valor).padStart(2, '0');

    const horas = formatar(0);
    const minutos = formatar(0);
    const segundos = formatar(0);

    const [isFullScreen, setIsFullScreen] = useState(false);

    const [horaAtual, setHoraAtual] = useState<Date>(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
        setHoraAtual(new Date()); 
        }, 1000);

        return () => clearInterval(intervalo); 
    }, []);

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
            setIsFullScreen(!!document.fullscreenElement)
        }

        document.addEventListener('fullscreenchange', onFullScreenChange)

        return () => document.removeEventListener('fullscreenchange', onFullScreenChange)
    }, [])

    return (
        <div className="flex items-center justify-center flex-col h-screen bg-black">
            <div className="flex text-[16rem] font-bold text-white stopwatch">
                <span className="Hora">{horas}</span>:
                <span className="Minuto">{minutos}</span>:
                <span className="Segundo">{segundos}</span>:
                <span className="Segundo text-[10rem]">{segundos}</span>
            </div>
            <div className="flex">
                <BiCaretRight className="icons mr-6" />
                <Link to={`/`}> 
                   <BiAlarm className="icons mr-6"/> 
                </Link>
                <BiFullscreen onClick={toggleFullScreen} className="icons mr-6" />
            </div>
        </div>
    )
}