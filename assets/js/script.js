// Function to update date and time
function updateDateTime() {
    const now = new Date(); // Get the current date and time
    document.getElementById('datetime').innerHTML = `Data e Hora: ${now.toLocaleString()}`; // Update the 'datetime' element with the current date and time
}

// Function to update climate information
function updateClimate() {
    // Here you can use an API to get the current temperature
    // For example, you can use the OpenWeatherMap API or any other weather API
}

// Function to update the quote displayed
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
        // Add up to 30 quotes here
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length); // Get a random index from the quotes array
    document.getElementById('quote').innerHTML = quotes[randomIndex]; // Update the 'quote' element with a random quote
}

// Function to create stars in the background
function createStars() {
    const numberOfStars = 200; // Number of stars to create
    const container = document.body; // The container for the stars is the body element
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div'); // Create a new div element for the star
        star.classList.add('star', 'star-animation'); // Add 'star' and 'star-animation' classes to the star
        star.style.top = `${Math.random() * 100}vh`; // Randomly position the star vertically
        star.style.left = `${Math.random() * 100}vw`; // Randomly position the star horizontally
        star.style.width = `${Math.random() * 3}px`; // Randomly set the width of the star
        star.style.height = star.style.width; // Set the height equal to the width
        container.appendChild(star); // Append the star to the container
    }
}

// Update the quote every 10 seconds
setInterval(updateQuote, 10000);

// Initial call to update date and time
updateDateTime();

// Initial call to update climate information
updateClimate();

// Update date and time every second
setInterval(updateDateTime, 1000);

// Create stars in the background
createStars();
