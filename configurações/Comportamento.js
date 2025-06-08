function ConectarDesconectar(){
   const MUDAR_TEXTO = document.getElementById("statusConexao");
   const MUDAR_COR = document.getElementById("conectar");
   const icon = document.getElementById("iconConectar");

    

    if (MUDAR_TEXTO.innerText === "não") {
        MUDAR_TEXTO.innerHTML = "sim";
   
        MUDAR_COR.style.backgroundColor = "#1aff00";
        MUDAR_COR.innerHTML = "Desconectar da tomada";

        icon.style.color = "#1aff00";
        icon.style.textShadow = "0 0 4px #1aff00";
    } else {
        MUDAR_COR.style.backgroundColor = "#FF674D";
        MUDAR_COR.innerHTML = "Ligar o ventilador";
        MUDAR_TEXTO.innerText = "não";
        icon.style.color = "#463F3A";
        icon.style.textShadow = "none";

     }



}

function LigarDesligar() {
    const MUDAR_TEXTO = document.getElementById("statusLigado");
    const MUDAR_COR = document.getElementById("ligar");
    const icon = document.getElementById("iconLigar");
   
    

    if (MUDAR_TEXTO.innerText === "não") {
        MUDAR_TEXTO.innerHTML = "sim";
   
        MUDAR_COR.style.backgroundColor = "#1aff00";
        MUDAR_COR.innerHTML = "Desligar o ventilador";

        icon.style.color = "#1aff00";
        icon.style.textShadow = "0 0 4px #1aff00";
    } else {
        MUDAR_COR.style.backgroundColor = "#FF674D";
        MUDAR_COR.innerHTML = "Ligar o ventilador";
        MUDAR_TEXTO.innerText = "não";
        icon.style.color = "#463F3A";
        icon.style.textShadow = "none";

     }


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
