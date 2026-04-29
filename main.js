// Requisito: Interação através de eventos (6 eventos obrigatórios)
document.getElementById('search-btn').addEventListener('click', async () => {
    const cidade = document.getElementById('city-input').value;

    if (cidade) {
        // Chamada à função que criaste no api.js
        const dados = await getWeatherData(cidade); 
        
        if (dados) {
            // Esta função vai estar no teu dom.js
            mostrarClima(dados); 
        } else {
            alert("Não encontrei essa cidade. Tenta outra!");
        }
    } else {
        alert("Escreve o nome de uma cidade primeiro!");
    }
});