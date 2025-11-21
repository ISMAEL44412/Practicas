// Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
// Ejemplo: 10 kilómetros = 6.21 millas

function kilometroAMilla(mille: number) {
  const oneKm = 0.62;
  return oneKm * mille;
}

console.log(kilometroAMilla(10));
