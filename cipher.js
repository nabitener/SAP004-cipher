const cipher = {
  encode: function (offset, string) {
    validacao(offset, string);
    let valor = "";
    const letrasAlfabeto = 26;

    for (let contador = 0; contador < string.length; contador++) {
      let letra = string.charCodeAt(contador);
     
      if (letra >= "A".charCodeAt(0) && letra <= "Z".charCodeAt(0)) {
        let numNovaLetra = (((letra - "A".charCodeAt(0) + offset) % letrasAlfabeto) + "A".charCodeAt(0));
        let novaLetra = String.fromCharCode(numNovaLetra);
        valor += novaLetra;
      }else if (letra >= "a".charCodeAt(0) && letra <= "z".charCodeAt(0)) {
        let numNovaLetra = (((letra - "a".charCodeAt(0) + offset) % letrasAlfabeto) + "a".charCodeAt(0));
        let novaLetra = String.fromCharCode(numNovaLetra);
        valor += novaLetra;
      }else if (letra == " ".charCodeAt(0)) { 
        valor += " ";
      } }
    return valor;
  },
  decode: function (offset, string) {
    validacao(offset, string);
    let valor = "";
    const letrasAlfabeto = 26;

    for (let contador = 0; contador < string.length; contador++) {
      let letra = string.charCodeAt(contador);
    
      if (letra >= "A".charCodeAt(0) && letra <= "Z".charCodeAt(0)) {
        let numNovaLetra = (((letra - "Z".charCodeAt(0) - offset) % letrasAlfabeto) + "Z".charCodeAt(0));
        let novaLetra = String.fromCharCode(numNovaLetra);
        valor += novaLetra;
      }else if (letra >= "a".charCodeAt(0) && letra <= "z".charCodeAt(0)) {
        let numNovaLetra = (((letra - "z".charCodeAt(0) - offset) % letrasAlfabeto) + "z".charCodeAt(0));
        let novaLetra = String.fromCharCode(numNovaLetra);
        valor += novaLetra;
      }else if (letra == " ".charCodeAt(0)) { 
        valor += " ";}
      }
    return valor;
  }};



//Validações

function validacao(offset, string) {
  if (string == "" && offset == "") {
    throw TypeError("Preencha o campo de mensagem e escolha a chave!")
  }

  if (typeof string != "string") {
    throw TypeError("Por favor digite apenas letras sem acentos")
  }
}

export default cipher;
