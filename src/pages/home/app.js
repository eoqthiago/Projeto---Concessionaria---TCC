const button = document.getElementById('button-contact')
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')
const texto = document.getElementById('texto')

button.addEventListener('click', (e) => {
    e.preventDefault()
   popup.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})

