const API_KEY = '9c24f65137121dfa3f0f5ea0790c188c';

// Interação 1: Clima Atual
async function getWeatherData(cidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`);
        if (!response.ok) throw new Error('Cidade não encontrada');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Interação 2: Previsão 5 Dias
async function getForecastData(cidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`);
        const data = await response.json();
        // Filtra para pegar apenas uma leitura por dia (a cada 24h)
        return data.list.filter((_, index) => index % 8 === 0);
    } catch (error) {
        return null;
    }
}