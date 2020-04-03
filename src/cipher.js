const cipher = {
  encode: function (offset, string) {

    let valor = "";

    if (string == "" && offset == "") {
      alert("Preencha o campo de mensagem e escolha a chave!")
    }

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

    if (string == "" && offset == "") {
      alert("Preencha o campo de mensagem e escolha a chave!")
    }
    for (let i = 0; i < string.length; i++) {

      let c = string.charAt(i);
   
      let partD = (c.charCodeAt(0) - 65 - offset + 52);

      if (partD < 0) {
        let d = (partD % 26) + 90;
        let e = String.fromCharCode(d);
        valor += e;
      } else {
        let d = (partD % 26) + 65;
        let e = String.fromCharCode(d);
        valor += e;
      }
    }
    return valor;
  }
};

/*function validaDados(string){

  for( let i=0; i < string.length; i++){
    let chr = String.fromCharCode(i);
    if (char <)

  }
  


  if(string==""){
    alert("Preencha o campo de mensagem!")
  }
  
}*/

export default cipher;
