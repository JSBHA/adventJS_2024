function prepareGifts(gifts) {
    
      // Elimina los duplicados usando un Set y luego convierte el Set en un array nuevamente
    let uniqueGifts = [...new Set(gifts)];

    // Ordena los regalos en orden ascendente
    let orderGifts = uniqueGifts.sort(function (a, b) {
        return a - b; // Compara los valores numéricos para ordenarlos de menor a mayor
      });

    return orderGifts  // Devuelve los regalos ordenados sin duplicados     
  }

  const gifts1 = [3, 1, 2, 3, 4, 2, 5]
  const preparedGifts1 = prepareGifts(gifts1)

  const gifts2 = [6, 5, 5, 5, 5]
  const preparedGifts2 = prepareGifts(gifts2)

  const gifts3 = []
  const preparedGifts3 = prepareGifts(gifts3)