import cipher from './cipher.js';

let botCifra = document.getElementById("botao-cifra");
botCifra.addEventListener("click", cifra);

let botDecifra = document.getElementById("botao-decifra");
botDecifra.addEventListener("click", decifra);


function cifra(codigo, offset) {
    codigo = document.getElementById("msg").value.toUpperCase();
    offset = parseInt(document.getElementById("chave").value);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = cipher.encode(codigo, offset);
    
    return resultado;
}

function decifra(codigo, offset) {
    codigo = document.getElementById("msg").value.toUpperCase();
    offset = parseInt(document.getElementById("chave").value);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = cipher.decode(codigo, offset);

    return resultado;
}





