import cipher from './cipher.js';


let comeco = document.getElementById("iniciar");
comeco.addEventListener("click", ok);


let botCifra = document.getElementById("botao-cifra");
botCifra.addEventListener("click", cifra);

let botDecifra = document.getElementById("botao-decifra");
botDecifra.addEventListener("click", decifra);

let botReset = document.getElementById("reset");
botReset.addEventListener("click", reset);

function reset() {

    if(document.getElementById("msg").value!="") {
        document.getElementById("msg").value="";
        document.getElementById("chave").value="";
        document.getElementById("resultado").innerHTML="";
    }
}

function cifra(codigo, offset) {
    codigo = document.getElementById("msg").value.toUpperCase();
    offset = parseInt(document.getElementById("chave").value);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = cipher.encode(offset, codigo);
    
    return resultado;
}

function decifra(codigo, offset) {
    codigo = document.getElementById("msg").value.toUpperCase();
    offset = parseInt(document.getElementById("chave").value);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = cipher.decode(offset, codigo);

    return resultado;
}

function ok () {
    let resumo = document.getElementById("instrucao").style.display = "none";
    let aparecer = document.getElementById("programa").style.display = "block";
}




