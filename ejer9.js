function moveTrain(board, mov) {
     // Encontramos la posición de la locomotora (@)
  let headPosition = null;
  for (let i = 0; i < board.length; i++) {
    const index = board[i].indexOf('@');
    if (index !== -1) {
      headPosition = [i, index];
      break;
    }
  }

  if (!headPosition) return 'crash'; // Si no se encuentra la locomotora

  const [headRow, headCol] = headPosition;
  let newRow = headRow;
  let newCol = headCol;

  // Mover la cabeza del tren según el movimiento
  switch (mov) {
    case 'L': newCol -= 1; break;
    case 'R': newCol += 1; break;
    case 'U': newRow -= 1; break;
    case 'D': newRow += 1; break;
    default: return 'crash';
  }

  // Verificar si el nuevo movimiento está fuera de los límites
  if (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= board[0].length) {
    return 'crash';
  }

  // Verificar si el nuevo espacio está ocupado por un vagón u otra parte del tren
  if (board[newRow][newCol] === 'o' || (newRow === headRow && newCol === headCol)) {
    return 'crash';
  }

  // Si el tren encuentra una fruta mágica
  if (board[newRow][newCol] === '*') {
    return 'eat';
  }

  // Si el tren avanza sin problemas
  return 'none';
}

const board1 = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
  ];

console.log(moveTrain(board1, 'U')) // ➞ 'eat'
console.log(moveTrain(board1, 'D')) // ➞ 'crash'
console.log(moveTrain(board1, 'L')) // ➞ 'crash'
console.log(moveTrain(board1, 'R')) // ➞ 'none'