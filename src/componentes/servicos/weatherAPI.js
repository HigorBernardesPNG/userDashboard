export const buscarClima = async (cidade) => {
    const apiKey = '34b8f9227745ca9d1a37f98ba85c6251';

    const resposta = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
    );
    
    return resposta.json();
};