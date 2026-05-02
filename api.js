const API_KEY = '9c24f65137121dfa3f0f5ea0790c188c';

async function getWeatherData(cidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`);
        if (!response.ok) throw new Error('Cidade não encontrada');
        return await response.json();
    } catch (error) {
        console.error("Erro na busca atual:", error);
        return null;
    }
}

async function getForecastData(cidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`);
        if (!response.ok) throw new Error('Erro na previsão');
        const data = await response.json();
        // Filtra para 5 dias (uma leitura a cada 24h)
        return data.list.filter((_, index) => index % 8 === 0);
    } catch (error) {
        console.error("Erro na previsão:", error);
        return null;
    }
}