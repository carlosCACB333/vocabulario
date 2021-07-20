export const gererarCadenas = (vocabulario, cantidad) => {
  //  vocabulario=['jose',44,52,69,32,356,3]

  let arrayCadenas = [];

  for (let index = 0; index < cantidad; index++) {
    // n primeros del array
    const len = aleatorio(1, 20);
    const cadena = [];
    for (let i = 0; i < len; i++) {
      const indexAleatory = aleatorio(0, vocabulario.length);
      cadena.push(vocabulario[indexAleatory]);
    }

    arrayCadenas.push(cadena);
  }

  return arrayCadenas;
};

export const generarLenguaje = (array, cantidad) => {
  let result = [];
  for (let index = 0; index < cantidad; index++) {
    const indexAleatory = aleatorio(0, array.length);
    result.push(array[indexAleatory]);
  }
  return result;
};
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
const aleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const arrayToString = (array) => {
  let cadena = "{";

  for (let index = 0; index < array.length; index++) {
    cadena += array[index];
    if (index !== array.length - 1) {
      cadena += " , ";
    }
  }

  cadena += "}";
  return cadena;
};

export const arrayRemoveRepeated = (array) => {
  let arrayCadenas = arrayJoin(array);

  let result = arrayCadenas.filter((item, index) => {
    return arrayCadenas.indexOf(item) === index;
  });
  return result;
};

const arrayJoin = (array) => {
  return array.map((item) => {
    return item.join("");
  });
};

// const arrayEcuals = (array1, array2) => {
//   return JSON.stringify(array1) === JSON.stringify(array2);
// };
