import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Icones from './Icones';
import './Relogio.css';

function Relogio() {
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

    return (
        <div className="Relogio">
            <h1>
                <span className="Hora">{horas}</span>:
                <span className="Minuto">{minutos}</span>:
                <span className="Segundo">{segundos}</span>
            </h1>
        </div>
    );
}

export default Relogio;
