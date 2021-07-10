// Retorna un entero aleatorio entre min (incluido) y max (excluido)

export function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}