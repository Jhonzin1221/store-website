function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').innerHTML = `Data e Hora: ${now.toLocaleString()}`;
}

function updateClimate() {
    // Aqui você pode usar uma API para obter a temperatura atual
    
}

function updateQuote() {
    const quotes = [
        "A vida é uma aventura ousada ou não é nada.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O futuro pertence àqueles que acreditam na beleza dos seus sonhos.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        "Não espere por oportunidades extraordinárias. Aproveite ocasiões comuns e faça-as grandiosas.",
        "Não importa quantas vezes você falha, você só precisa estar certo uma vez.",
        "A vida é 10% o que acontece com você e 90% como você reage a isso.",
        "Nunca é tarde demais para ser o que você poderia ter sido.",
        "Se você pode sonhar, você pode fazer.",
        "A diferença entre um obstáculo e uma oportunidade é a sua atitude." 
        // Adicione até 30 frases aqui
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randomIndex];
}

function createStars() {
    const numberOfStars = 200;
    const container = document.body;
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star', 'star-animation');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        container.appendChild(star);
    }
}

setInterval(updateQuote, 10000); // Atualiza a cada 3 segundos
updateDateTime();
updateClimate();
setInterval(updateDateTime, 1000); // Atualiza a cada segundo

createStars();