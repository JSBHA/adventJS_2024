function inBox(box) {
    // Primero verificamos si la caja tiene al menos 3 filas y 3 columnas (porque un regalo dentro de la caja debe estar rodeado por #)
    if (box.length < 3 || box[0].length < 3) {
      return false;
    }
  
    // Recorremos la caja, pero no analizamos la primera ni la última fila, ni la primera ni la última columna.
    for (let i = 1; i < box.length - 1; i++) {
      for (let j = 1; j < box[i].length - 1; j++) {
        // Si encontramos un * en una posición interna (no en los bordes)
        if (box[i][j] === '*') {
          // Verificamos si está rodeado por # en sus posiciones adyacentes
          if (
            box[i-1][j] === '#' && // arriba
            box[i+1][j] === '#' && // abajo
            box[i][j-1] === '#' && // izquierda
            box[i][j+1] === '#'    // derecha
          ) {
            return true; // El * está dentro de la caja
          }
        }
      }
    }
  
    // Si no encontramos un * dentro de la caja, devolvemos false
    return false;
  }
  
  // Pruebas con ejemplos proporcionados:
  
  console.log(inBox([
    "###",
    "#*#",
    "###"
  ])); // ➞ true
  
  console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ])); // ➞ true
  
  console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ])); // ➞ false
  
  console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])); // ➞ false
  