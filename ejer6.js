function inBox(box) {
  // Iterar sobre cada fila, excluyendo la primera y la última fila
  for(let i = 1; i < box.length -1; i++){
     // Iterar sobre cada carácter dentro de la fila, excluyendo el primero y el último carácter
    for(let j = 1; j < box[i].length -1; j++){
      // Si encontramos un asterisco que está dentro de los bordes, devolvemos true
      if(box[i][j] === '*'){
        return true;
      }
    }
  }
  return false
   
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
  