let words: string[] = [
  "SOL",
  "ARBOL",
  "MAR",
  "CIELO",
  "FUEGO",
  "NIEVE",
  "LUZ",
  "SOMBRA",
  "VIENTO",
  "HOJA",
  "RIO",
  "FLOR",
  "PIEDRA",
  "NUBE",
  "CAMPO",
  "MONTAÑA",
  "ESTRELLA",
  "ARENA",
  "TIERRA",
  "LLUVIA",
];
export function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
