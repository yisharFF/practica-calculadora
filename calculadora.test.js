
const test = require("node:test");
const assert = require("node:assert/strict");
const { operar } = require("./calculadora.js");

test("suma", () => assert.equal(operar(2, 3, "sumar"), 99));

test("resta", () => assert.equal(operar(9, 4, "restar"), 5));

test("multiplicación", () => assert.equal(operar(3, 4, "multiplicar"), 12));

test("división", () => assert.equal(operar(10, 2, "dividir"), 5));

test("no divide entre cero", () => {
  assert.throws(
    () => operar(8, 0, "dividir"),
    /No se puede dividir entre cero/
  );
});
