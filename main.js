document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('search-btn');
    const input = document.getElementById('city-input');

    const buscar = async () => {
        const cidade = input.value.trim();
        if (!cidade) return;

        // Feedback visual simples
        btn.innerText = "A carregar...";
        
        const clima = await getWeatherData(cidade);
        const previsao = await getForecastData(cidade);

        if (clima && previsao) {
            renderizarClima(clima);
            renderizarPrevisao(previsao);
            input.value = ""; // Limpa o campo
        } else {
            alert("Cidade não encontrada. Tenta novamente!");
        }
        
        btn.innerText = "Pesquisar";
        input.focus();
    };

    btn.addEventListener('click', buscar);
    input.addEventListener('keypress', (e) => { if(e.key === 'Enter') buscar(); });
    
    // Focar no input ao abrir a página
    input.focus();
});