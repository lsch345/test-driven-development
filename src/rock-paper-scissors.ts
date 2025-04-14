type Move = 'rock' | 'paper' | 'scissors';

export function play(player1: string, player2: string): number {
  const validMoves: Move[] = ['rock', 'paper', 'scissors'];

  const p1Move = player1.trim().toLowerCase();
  const p2Move = player2.trim().toLowerCase();

  if (!validMoves.includes(p1Move as Move) || !validMoves.includes(p2Move as Move)) {
    throw new Error('Invalid move');
  }

  if (p1Move === p2Move) return 0;
  if (
    (p1Move === 'rock' && p2Move === 'scissors') ||
    (p1Move === 'paper' && p2Move === 'rock') ||
    (p1Move === 'scissors' && p2Move === 'paper')
  ) {
    return 1;
  }
  return 2;
}