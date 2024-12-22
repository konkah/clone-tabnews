const calculadora = require("../database/models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  //console.log(resultado);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  //console.log(resultado);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 'rabanete' 'Erro'", () => {
  const resultado = calculadora.somar("banana", "rabanete");
  //console.log(resultado);
  expect(resultado).toBe("Erro");
});

test("somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", "rabanete");
  //console.log(resultado);
  expect(resultado).toBe("Erro");
});

/*
test("espero que 1 seja 1", () => {
  expect(2).toBe(1);
});

 Teste de exemplo 1
test("nome do teste", () => {
  console.log("E assim, funciona?");
});

 Teste de exemplo 1
test("testando outra condição do meu sistema", () => {
  console.log("outro teste");
});

 Função arrow
() => {
  console.log("E assim, funciona?");
}

 Função anônima
function () {
  console.log("E assim, funciona?");
}

 Função tradicional
callbackFunction
function callbackFunction() {
  console.log("Essa função tá sendo chamada?");
}
*/
