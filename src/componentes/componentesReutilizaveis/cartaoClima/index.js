import React from 'react'; // Importa a biblioteca React
import ClimaAnimado from '../climaAnimado/index'; // Importa o novo componente de animação
import './cartaoClima.css';

const WeatherCard = ({ clima }) => {

    return (

        <section className="containerClima">
            <div className="containerClima__cidadeIcon">
                <h2>{clima.name} ({clima.sys.country})</h2>
                <div className="containerClima__cidadeIcon__icon">

                    <div className='container__iconNuvem'>

                    <ClimaAnimado tipoClima={clima.weather[0].main} /> {/* Passa o clima atual para a animação */}

                    </div>

                </div>
            </div>
            <div className="containerClima__detalhesClima">
                <p>🌡 Temperatura: {clima.main.temp}°C </p>
                <p>☁️ Condição: {clima.weather[0].description} </p>
                <p className='detalhes-clima_Vento'>💨 Vento: {clima.wind.speed} m/s</p>
                <p className='detalhes-clima_Umidade'>💧 Umidade: {clima.main.humidity}%</p>

            </div>

        </section>

    );
};

export default WeatherCard;