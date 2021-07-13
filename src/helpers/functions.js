
export const gererarCadenas = (vocabulario, cantidad) => {
  
  //  vocabulario=['jose',44,52,69,32,356,3]
  
  let arrayCadenas = [];
  
  for (let index = 0; index < cantidad; index++) {
    
    // desordenados
    const shuffled = vocabulario.sort(() => 0.5 - Math.random());
    
    // n primeros del array
    const len=aleatorio(1,vocabulario.length+1)
    let selected = shuffled.slice(0, len);
    
    arrayCadenas.push(selected)                
  }
  
  return arrayCadenas;
  
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
const aleatorio=(min, max)=> {
  return Math.floor(Math.random() * (max - min)) + min;
}