// Script de Carrusel
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.carousel-indicators button');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function showPrev() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
}

function showNext() {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

updateCarousel();

var input_nombre = document.getElementById("nombre");
var input_edad = document.getElementById("edad");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("submit");

console.log(input_nombre);
console.log(input_edad);
console.log(input_email);
console.log(input_submit);




input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event){
event.preventDefault();

var valor_nombre = input_nombre.value;
var valor_edad = input_edad.value;
var valor_email = input_email.value;
var valor_submit = input_submit.value;

console.log(valor_nombre);
console.log(valor_edad);
console.log(valor_email);
console.log(valor_submit);


var placeholder_nombre = document.getElementById("nombre-placeholder");
var placeholder_email = document.getElementById("email-placeholder");

placeholder_nombre.innerHTML = valor_nombre;
placeholder_email.innerHTML = valor_email;

elemento_feedback = document.getElementById("feedback");
elemento_feedback.classList.remove("oculto");

elemento_formulario = document.getElementById("formulario");
elemento_formulario.classList.add("oculto");


}
