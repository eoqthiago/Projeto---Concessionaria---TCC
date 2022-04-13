/*function imgcarro () {
    let image = document.getElementById("image");
    if(image.src === "../../assets/images/carro-quaselado.png"){
        image.src = "../../assets/images/bmw-m6-lado.png";
    }
    else if(image.src === "../../assets/images/bmw-m6-lado.png"){
        image.src = "../../assets/images/carro-quaselado.png";
    }
}
imgcarro();
function imgcarro(){
    if(document.getElementById("image").src = "../../assets/images/bmw-m6-lado.png"){
        document.getElementById("image").src = "../../assets/images/carro-quaselado.png";
    } else if(document.getElementById("image").src = "../../assets/images/carro-quaselado.png"){
        document.getElementById("image").src = "../../assets/images/bmw-m6-lado.png"
    }
}
imgcarro();*/


//Animação do cabeçalho
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
    document.getElementById("header").style.height = "50px";
  } else {
    document.getElementById("header").style.height = "";
  }

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("return").style.display = "initial";
  } else {
    document.getElementById("return").style.display = "none";
  }
}