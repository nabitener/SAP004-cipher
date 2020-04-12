const cipher = {
  encode: function (offset, string) {
    validacao(offset, string);
    let valor = "";

    for (let i = 0; i < string.length; i++) {
      let c = string.charCodeAt(i);
     
      if (c >= 65 && c <= 90) {
        let d = (((c - 65 + offset) % 26) + 65);
        let e = String.fromCharCode(d);
        valor += e;
      }else if (c >= 97 && c <= 122) {
        let d = (((c - 97 + offset) % 26) + 97);
        let e = String.fromCharCode(d);
        valor += e;
      }else if (c == 32) { 
        valor += " ";
      } }
    return valor;
  },
  decode: function (offset, string) {
    validacao(offset, string);
    let valor = "";

    for (let i = 0; i < string.length; i++) {
      let c = string.charCodeAt(i);
    
      if (c >= 65 && c <= 90) {
        let d = (((c - 90 - offset) % 26) + 90);
        let e = String.fromCharCode(d);
        valor += e;
      }else if (c >= 97 && c <= 122) {
        let d = (((c - 122 - offset) % 26) + 122);
        let e = String.fromCharCode(d);
        valor += e;
      }else if (c == 32) { 
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
