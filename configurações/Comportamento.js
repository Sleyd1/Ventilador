function ConectarDesconectar(){
   const MUDAR_TEXTO = document.getElementById("statusConexao");
   const MUDAR_COR = document.getElementById("conectar");
   const icon = document.getElementById("iconConectar");

    MUDAR_TEXTO.innerHTML = "sim";
   
    MUDAR_COR.style.backgroundColor = "#1aff00";
    MUDAR_COR.innerHTML = "Desconectar da tomada";

    icon.style.color = "#1aff00";
    icon.style.textShadow = "0 0 4px #1aff00";



}

function LigarDesligar() {
    const MUDAR_TEXTO = document.getElementById("statusLigado");
    const MUDAR_COR = document.getElementById("ligar");
    const icon = document.getElementById("iconLigar");
   
    MUDAR_TEXTO.innerHTML = "sim";
   
    MUDAR_COR.style.backgroundColor = "#1aff00";
    MUDAR_COR.innerHTML = "Desligar o ventilador";

    icon.style.color = "#1aff00";
    icon.style.textShadow = "0 0 4px #1aff00";

}



function ventilador(){
    const botaoLigar = document.getElementById("statusLigado");
    const statusConexao = document.getElementById("statusConexao");
    const girarVentilador = document.getElementById("ventilador");
    const statusDoVentilador = document.getElementById("status");
    if(botaoLigar.innerHTML === "sim" && statusConexao.innerHTML === "sim"){
        statusDoVentilador.innerHTML = "Ligado";
        statusDoVentilador.style.color = "#1aff00";


    }
}
