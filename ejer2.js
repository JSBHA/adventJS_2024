function createFrame(names) {
  // Paso 1: Encontrar el largo del nombre más largo
  let maxLength = Math.max(...names.map((name) => name.length));

  // Paso 2: Construir el borde superior e inferior
  let border = "*".repeat(maxLength + 2 + 2);

  // Paso 3: Construir las líneas con los nombres
  let frameName = names.map((name) => {
    return "* " + name.padEnd(maxLength) + " *";
  });

  // Paso 4: Combinar todo
  return [border, ...frameName, border].join("\n");
}

createFrame(["midu", "madeval", "educalvolpz"]);
console.log(createFrame(["midu", "madeval", "educalvolpz"]));
