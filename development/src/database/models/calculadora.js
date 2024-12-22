function somar(numero1, numero2) {
  if (typeof numero1 !== "number") {
    if (typeof numero2 !== "number") {
      return "Erro";
    }
    return numero1 + numero2;
  }
  return numero1 + numero2;
}

exports.somar = somar;
