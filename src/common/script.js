

//Animação do cabeçalho
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("header").style.height = "50px";
    document.getElementById("header").style.backgroundColor = "#000";
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
}