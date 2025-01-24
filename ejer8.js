function drawRace(indices, length) {

    let lanes = indices.map((position, i) => {
        let nieve = '~'.repeat(length);  // Inicializamos el carril con nieve

        // Si la posición es 0, no colocamos la 'r' en ningún carril
        if (position >= 0){
            nieve = nieve.slice(0, position) + 'r' + nieve.slice(position + 1); 
        } else {
            const finalPosition = length + position;  // Si la posición es negativa, calculamos la posición desde el final
            nieve = nieve.slice(0, finalPosition) + 'r' + nieve.slice(finalPosition + 1);
        }
         // Si el índice es 0, no se debe colocar la 'r'
        if (position === 0) {
            nieve = '~'.repeat(length); // Carril completamente vacío
          }

        // Agregar el desplazamiento isométrico y el número del carril con espacio
        return ' '.repeat(indices.length - i - 1) + nieve + ' /' + (i + 1);
    });

    // Unir todas las filas con saltos de línea
    return lanes.join('\n');
}

// Ejemplo de uso
console.log(drawRace([0, 5, -3], 10));
console.log(drawRace([2, -1, 0, 5], 8));
console.log(drawRace([3, 7, -2], 12));

