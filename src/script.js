const fechaEvento = new Date("2025-06-01T00:00:00").getTime();

const intervalo = setInterval(function () {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaEvento - ahora;

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById("reloj").innerHTML = `
    <span>${dias}</span> días 
    <span>${horas}</span> horas 
    <span>${minutos}</span> minutos 
    <span>${segundos}</span> segundos
`;

    if (tiempoRestante < 0) {
        clearInterval(intervalo);
        document.getElementById("reloj").innerHTML = "¡El gran día ha llegado!";
    }
}, 1000);

const btn = document.getElementById("guardarFecha");

btn.addEventListener("click", function() {
    // Cambia el texto para dar feedback
    btn.textContent = "Abriendo calendario...";

    // Establece la fecha y hora del evento
    const fechaBoda = "2025-06-01";
    const horaBoda = "16:00";

    const startDateTime = `${fechaBoda}T${horaBoda.replace(":", "")}00Z`;
    const endDateTime = `${fechaBoda}T${horaBoda.replace(":", "")}59Z`;

    const nombreEvento = "Boda de Sandra y Pablo";
    const descripcion = "Celebra con nosotros este día tan especial.";
    const ubicacion = "Iglesia Santa María, Roma, Italia";

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(nombreEvento)}&dates=${startDateTime}/${endDateTime}&details=${encodeURIComponent(descripcion)}&location=${encodeURIComponent(ubicacion)}`;

    // Abrir Google Calendar
    window.open(url, "_blank");

    // Después de 2 segundos, restaurar el texto del botón
    setTimeout(() => {
        btn.textContent = "Guarda la fecha";
    }, 2000);
});



// Carousel automatico
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel img");
const leftButton = document.querySelector(".carousel-btn.left");
const rightButton = document.querySelector(".carousel-btn.right");

let currentIndex = 0;

function goToSlide(index) {
    const slide = slides[index];
    if (slide) {
        carousel.scrollTo({
            left: slide.offsetLeft,
            behavior: "smooth"
        });
    }
}

// Avanza automáticamente cada 3 segundos
const autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}, 3000);

// Flecha derecha
rightButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
});

// Flecha izquierda
leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
});
