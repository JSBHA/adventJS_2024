function createXmasTree(height, ornament) {

    let tree = [];

    // Construir el árbol de arriba asi a bajo 
    for (let i = 1; i <= height; i++) {
        let leftSpace = '_'.repeat(height - i); // Espacios a la izquierda
        let adorno = ornament.repeat(2 * i - 1); // Adornos en el centro
        let filaTree = `${leftSpace}${adorno}${leftSpace}`; // Composición de la fila

        tree.push(filaTree); // Añadir fila al árbol
    }

    // Tronco del árbol
    let trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1); // Línea del tronco
    tree.push(trunk); // Añadir primer tronco
    tree.push(trunk); // Añadir segundo tronco

    // Unir todas las filas con saltos de línea y devolver como string
    return tree.join('\n');
}

const tree = createXmasTree(5, '*')
console.log(tree)

const tree2 = createXmasTree(3, '+')
console.log(tree2)

const tree3 = createXmasTree(6, '@')
console.log(tree3)
