const button = document.getElementById('button-contact')
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')

/* const form = document.querySelector('#formulario')
const check = document.querySelector('#check-img')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const inputNome = e.target.querySelector('#nome');
   
    const nome = String(inputNome.value);
    if(Number(nome)){
        document.getElementById('check-img').setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png');
        document.getElementById('txt-popup').innerHTML = 'Erro na sua Mensagem!';
        document.getElementById('paragrafo-popup').innerHTML = 'Digite Apenas Letras';
    }
    else if(!nome.trim()){
        document.getElementById('check-img').setAttribute('src', '../../assets/images/check-fail.png');
        document.getElementById('txt-popup').innerHTML = 'Erro na sua Mensagem!';
        document.getElementById('paragrafo-popup').innerHTML = 'o Espaço está em Branco';
    }else{
    }
})
 */



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

