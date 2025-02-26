function compile(instructions) {
  const register = {}; // Registros
  let index = 0;  // Índice de instrucción

  const operations = {
    DEC: (r) => register[r]--,  // Decrementar registro
    INC: (r) => register[r]++,  // Decrementar registro
    MOV: (x, y) => register[y] = isNaN(x) ? register[x] : + x,  // Decrementar registro
    JMP: (r, i) => {if(register[r] === 0) index = i - 1 }, // Salto si valor es 0
  };

  while (index < instructions.length) {
    const [comm, x, y] = instructions[index].split(" "); // Descomponer instrucción

    if (register[x] === undefined) register[x] = 0; // Inicializar registro si no existe
    operations[comm](x, y); // Ejecutar operación
    index++; // Avanzar al siguiente índice
  }

  return register['A']; // Retornar valor del registro A
}
const instructions = [
  "MOV -1 C", // copia -1 al registro 'C',
  "INC C", // incrementa el valor del registro 'C'
  "JMP C 1", // salta a la instrucción en el índice 1 si 'C' es 0
  "MOV C A", // copia el registro 'C' al registro 'a',
  "INC A", // incrementa el valor del registro 'a'
];

console.log(compile(instructions));
