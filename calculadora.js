
function operar(a, b, operacion) {
  if (operacion === "sumar") return a + b;
  if (operacion === "restar") return a - b;
  if (operacion === "multiplicar") return a * b;

  if (operacion === "dividir") {
    if (b === 0) {
      throw new Error("No se puede dividir entre cero");
    }
    return a / b;
  }

  throw new Error("Operación no válida");
}

function calcular() {
  const a = Number(document.getElementById("numero1").value);
  const b = Number(document.getElementById("numero2").value);
  const op = document.getElementById("operacion").value;
  const salida = document.getElementById("resultado");

  try {
    salida.textContent = "Resultado: " + operar(a, b, op);
  } catch (error) {
    salida.textContent = "Error: " + error.message;
  }
}

// Permite que las pruebas de Node.js utilicen la función.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { operar };
}
