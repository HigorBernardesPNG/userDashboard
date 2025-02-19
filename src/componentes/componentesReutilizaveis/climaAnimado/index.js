import React from 'react';
import Lottie from 'lottie-react';
import AnimationCeuLimpo from '../../../assets/AnimationCeuLimpo.json'; // Importa a animação JSON

const ClimaAnimado = ({ tipoClima }) => {
    // Define qual animação exibir com base no clima recebido
    const animacoes = {
        Clear: AnimationCeuLimpo, // Sol
        Rain: require('../../../assets/AnimationChuva.json'), // Chuva
        Clouds: require('../../../assets/AnimationNublado.json'), // Nublado
        Thunderstorm: require('../../../assets/AnimationChuvaTrovao.json'), // Tempestade
        Snow: require('../../../assets/AnimationNeve.json'), // Neve
        Haze: require('../../../assets/AnimationVentoNeblina.json'), // Neblina
    };

    return (
        <Lottie
            animationData={animacoes[tipoClima] || AnimationCeuLimpo} // Usa a animação correspondente ou o sol como padrão
            loop={true} // Define se a animação repete
            style={{ width: 150, height: 150 }} // Define tamanho
        />
    );
};

export default ClimaAnimado;
