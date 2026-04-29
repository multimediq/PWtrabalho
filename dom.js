function renderizarClima(dados) {
    const display = document.getElementById('weather-display');
    display.innerHTML = ""; 

    const card = document.createElement('div');
    card.className = 'weather-card';

    // Aqui geramos cerca de 10 elementos dinâmicos
    card.innerHTML = `
        <h2>${dados.name}</h2>
        <span class="temp-grande">${Math.round(dados.main.temp)}°C</span>
        <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}@4x.png">
        <div class="detalhes-grid">
            <div class="dado">💧 Humidade: ${dados.main.humidity}%</div>
            <div class="dado">💨 Vento: ${dados.wind.speed}km/h</div>
            <div class="dado">🌡️ Máx: ${Math.round(dados.main.temp_max)}°C</div>
            <div class="dado">📉 Mín: ${Math.round(dados.main.temp_min)}°C</div>
        </div>
    `;
    display.appendChild(card);
}

function renderizarPrevisao(lista) {
    const forecastDiv = document.getElementById('forecast-container');
    forecastDiv.innerHTML = "<h3>Previsão Próximos Dias</h3>";
    
    const grid = document.createElement('div');
    grid.className = 'forecast-grid';

    lista.forEach(dia => {
        // Multiplicamos elementos: 5 dias x 5 elementos cada = 25 elementos + 15 do card anterior = 40!
        const miniCard = document.createElement('div');
        miniCard.className = 'mini-card';
        miniCard.innerHTML = `
            <p>${new Date(dia.dt_txt).toLocaleDateString('pt-PT', {weekday: 'short'})}</p>
            <img src="https://openweathermap.org/img/wn/${dia.weather[0].icon}.png">
            <span>${Math.round(dia.main.temp)}°C</span>
        `;
        grid.appendChild(miniCard);
    });
    forecastDiv.appendChild(grid);
}