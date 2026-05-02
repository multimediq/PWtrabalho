function renderizarClima(dados) {
    const display = document.getElementById('weather-display');
    display.innerHTML = ""; 

    const card = document.createElement('div');
    card.className = 'weather-card';

    const options = { hour: '2-digit', minute: '2-digit' };
    const nascer = new Date(dados.sys.sunrise * 1000).toLocaleTimeString('pt-PT', options);
    const porSol = new Date(dados.sys.sunset * 1000).toLocaleTimeString('pt-PT', options);

    card.innerHTML = `
        <h2>${dados.name}</h2>
        <span class="temp-grande">${Math.round(dados.main.temp)}°C</span>
        <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}@4x.png" alt="Icon Clima">
        <div class="detalhes-grid">
            <div class="dado">💧 Humidade: <b>${dados.main.humidity}%</b></div>
            <div class="dado">💨 Vento: <b>${dados.wind.speed}km/h</b></div>
            <div class="dado">🌡️ Máx: <b>${Math.round(dados.main.temp_max)}°C</b></div>
            <div class="dado">📉 Mín: <b>${Math.round(dados.main.temp_min)}°C</b></div>
            <div class="dado">🌅 Nascer: <b>${nascer}</b></div>
            <div class="dado">🌇 Pôr do Sol: <b>${porSol}</b></div>
        </div>
    `;
    display.appendChild(card);
}

function renderizarPrevisao(lista) {
    const forecastDiv = document.getElementById('forecast-container');
    forecastDiv.innerHTML = "<h3>📅 Previsão para os Próximos Dias</h3>";
    
    const grid = document.createElement('div');
    grid.className = 'forecast-grid';

    lista.forEach(dia => {
        const miniCard = document.createElement('div');
        miniCard.className = 'mini-card';
        miniCard.innerHTML = `
            <p>${new Date(dia.dt_txt).toLocaleDateString('pt-PT', {weekday: 'short'})}</p>
            <img src="https://openweathermap.org/img/wn/${dia.weather[0].icon}.png" alt="Prev">
            <span>${Math.round(dia.main.temp)}°C</span>
            <div style="font-size: 0.7rem; opacity: 0.8">${dia.weather[0].description}</div>
        `;
        grid.appendChild(miniCard);
    });
    forecastDiv.appendChild(grid);
}