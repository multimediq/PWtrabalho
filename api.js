const API_KEY = '9c24f65137121dfa3f0f5ea0790c188c';

async function getWeatherData(cidade) {
    try {
        // O link tem de incluir a tua API_KEY no fim!
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`);
        
        if (!response.ok) throw new Error('Cidade não encontrada');
        
        const data = await response.json();
        console.log("Dados recebidos:", data); // Para veres na consola se funcionou
        return data;
    } catch (error) {
        console.error("Erro na API:", error);
        return null;
    }
}