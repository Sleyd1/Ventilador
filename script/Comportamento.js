function ConectarDesconectar(){
   const mudar_Texto = document.getElementById("statusConexao");
   const mudar_Cor = document.getElementById("conectar");
   const icon = document.getElementById("iconConectar");

    if (mudar_Texto.innerText === "não") {
        mudar_Texto.innerHTML = "sim";

        mudar_Cor.style.backgroundColor = "#1aff00";
        mudar_Cor.innerHTML = "Desconectar da tomada";

        icon.style.color = "#1aff00";
        icon.style.textShadow = "0 0 4px #1aff00";
    } else {
        mudar_Cor.style.backgroundColor = "#FF674D";
        mudar_Cor.innerHTML = "Conectar o ventilador";
        mudar_Texto.innerText = "não";
        icon.style.color = "#463F3A";
        icon.style.textShadow = "none";

     }
     ventilador();



}

function LigarDesligar() {
    const mudar_Texto = document.getElementById("statusLigado");
    const mudar_Cor = document.getElementById("ligar");
    const icon = document.getElementById("iconLigar");


    if (mudar_Texto.innerText === "não") {
        mudar_Texto.innerHTML = "sim";

        mudar_Cor.style.backgroundColor = "#1aff00";
        mudar_Cor.innerHTML = "Desligar o ventilador";

        icon.style.color = "#1aff00";
        icon.style.textShadow = "0 0 4px #1aff00";
    } else {
        mudar_Cor.style.backgroundColor = "#FF674D";
        mudar_Cor.innerHTML = "Ligar o ventilador";
        mudar_Texto.innerText = "não";
        icon.style.color = "#463F3A";
        icon.style.textShadow = "none";

     }
     ventilador();

}



function ventilador(){
    const botaoLigar = document.getElementById("statusLigado");
    const statusConexao = document.getElementById("statusConexao");
    const girarVentilador = document.getElementById("ventilador");
    const statusDoVentilador = document.getElementById("status");
    
    if(botaoLigar.innerHTML === "sim" && statusConexao.innerHTML === "sim"){
        statusDoVentilador.innerHTML = "Ligado";
        statusDoVentilador.style.color = "#1aff00";
        girarVentilador.style.animation = "spin 0.6s linear infinite";


    } else {
        statusDoVentilador.innerHTML = "Desligado";
        statusDoVentilador.style.color = "#FF674D";
        girarVentilador.style.animation = "none";
    }
}
