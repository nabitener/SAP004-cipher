const cipher = {
  encode: function (string, offset) {

    let valor = " ";
    for (let i = 0; i < string.length; i++) {

      let c = string.charAt(i);
      let d = (((c.charCodeAt(0) - 65 + offset) % 26) + 65);
      let e = String.fromCharCode(d);

      valor += e;

    }
    return valor;
  },
  decode: function (string, offset) {

    let valor = " ";
    for (let i = 0; i < string.length; i++) {

      let c = string.charAt(i);
      let d = (((c.charCodeAt(0) - 65 - offset) % 26) + 65);
      let e = String.fromCharCode(d);

      valor += e;
    }
    return valor;
  }
};

export default cipher;
