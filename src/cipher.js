const cipher = {
  encode: function (offset, string) {

    let valor = "";

    validacao(offset, string);

    for (let i = 0; i < string.length; i++) {

      let c = string.charAt(i);
      let d = (((c.charCodeAt(0) - 65 + offset) % 26) + 65);
      let e = String.fromCharCode(d);

      valor += e;

    }
    return valor;
  },
  decode: function (offset, string) {

    let valor = "";

    validacao(offset, string);
    for (let i = 0; i < string.length; i++) {

    let c = string.charAt(i);
      let d = (((c.charCodeAt(0) - 90 - offset) % 26) + 90);
      let e = String.fromCharCode(d);
      valor += e;
  }
    return valor;
  }

};

function validacao(offset, string) {
  if (string == "" && offset == "") {
    throw TypeError("Preencha o campo de mensagem e escolha a chave!")
  }

  if (typeof string != "string") {
    throw TypeError("Por favor digite apenas letras sem acentos")
  }
}


  


export default cipher;
