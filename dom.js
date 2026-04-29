function renderizarClima(dados) {
    const display = document.getElementById('weather-display');
    display.innerHTML = ""; // Limpa o que lá estava

    // Criar o contentor principal (1 elemento)
    const cardPrincipal = document.createElement('div');
    cardPrincipal.className = 'main-card';

    // Criar vários elementos para detalhar o tempo (aqui bates a meta dos 40 rápido)
    const infoHtml = `
        <div class="header-clima">
            <h2>${dados.name}</h2>
            <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png" alt="Icone">
        </div>
        <div class="detalhes">
            <p><strong>Temperatura:</strong> ${Math.round(dados.main.temp)}°C</p>
            <p><strong>Sensação:</strong> ${Math.round(dados.main.feels_like)}°C</p>
            <p><strong>Humidade:</strong> ${dados.main.humidity}%</p>
            <p><strong>Vento:</strong> ${dados.wind.speed} km/h</p>
            <p><strong>Condição:</strong> ${dados.weather[0].description}</p>
        </div>
    `;

    cardPrincipal.innerHTML = infoHtml;
    display.appendChild(cardPrincipal);
}