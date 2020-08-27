import cipher from "./cipher.js";

const comeco = document.getElementById("iniciar");
comeco.addEventListener("click", ok);

const botCifra = document.getElementById("botao-cifra");
botCifra.addEventListener("click", cifra);

const botDecifra = document.getElementById("botao-decifra");
botDecifra.addEventListener("click", decifra);

const botReset = document.getElementById("reset");
botReset.addEventListener("click", reset);

function reset() {
  document.getElementById("msg").value = "";
  document.getElementById("chave").value = "";
  document.getElementById("resultado").textContent = "";
}

function cifra(codigo, offset) {
  codigo = document.getElementById("msg").value;
  offset = parseInt(document.getElementById("chave").value);

  const resultado = document.getElementById("resultado");
  resultado.textContent = cipher.encode(offset, codigo);

  return resultado;
}

function decifra(codigo, offset) {
  codigo = document.getElementById("msg").value;
  offset = parseInt(document.getElementById("chave").value);

  const resultado = document.getElementById("resultado");
  resultado.textContent = cipher.decode(offset, codigo);

  return resultado;
}

function ok() {
  document.getElementById("instrucao").style.display = "none";
  document.getElementById("programa").style.display = "flex";
}
