const navig = document.getElementById('nav');
const btn = document.getElementById('toggle');

btn.addEventListener('click', () => {
    navig.classList.toggle('active');
})

