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
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("header").style.height = "50px";
    document.getElementById("header").style.backgroundColor = "#55595c";
    document.getElementById("header-logo").style.fontSize = "2em";
    document.getElementById("header-item").style.fontSize = "0.98em";
    document.getElementById("user").style.transform = "scale(0.8)";
  } else {
    document.getElementById("header").style.height = "";
    document.getElementById("header").style.backgroundColor = "";
    document.getElementById("header-logo").style.fontSize = "";
    document.getElementById("header-item").style.fontSize = "1em";
    document.getElementById("user").style.transform = "";
  }

  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("return").style.display = "initial";
  } else {
    document.getElementById("return").style.display = "none";
  }
}