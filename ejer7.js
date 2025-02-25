function fixPackages(packages) {
  const stack = []; // usaremos la pila (stack) para manejar los parentesis anidados
  let packagesOrder = ""; // Para almacenaer el string resultante

  // Recorremos la cadena 'packages' carácter por carácter.
  for (let i = 0; i < packages.length; i++) {
    const char = packages[i]; // Obtenemos el carácter actual.

    // Si encontramos un paréntesis de apertura '('.
    if (char === "(") {
      stack.push(packagesOrder); // Guardamos el contenido acumulado hasta el momento en la pila.
      packagesOrder = ""; // Reiniciamos 'packagesOrder' para empezar a acumular los caracteres dentro del paréntesis.

      // Si encontramos un paréntesis de cierre ')'.
    } else if (char === ")") {
      let reversedContent = packagesOrder.split("").reverse().join("");
      // Sacamos el valor guardado en la pila y concatenamos el contenido invertido.
      packagesOrder = stack.pop() + reversedContent;

      // Si el carácter no es ni un paréntesis de apertura ni de cierre.
    } else {
      packagesOrder += char; // Añadimos el carácter al contenido de 'packagesOrder'.
    }
  }

  // Devolvemos el contenido final después de procesar toda la cadena.
  return packagesOrder;
}

console.log(fixPackages("a(cb)de"));
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages("a(bc(def)g)h"));
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages("abc(def(gh)i)jk");
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages("a(b(c))e");
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
