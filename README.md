# Tic-Tac-Toe

A simple, responsive two-player Tic-Tac-Toe game built with plain HTML, CSS, and JavaScript. No frameworks or dependencies required.

## Features

- Two-player local gameplay (Player X vs Player O)
- X is shown in blue, O in red
- Automatic win detection across all 8 winning lines (rows, columns, diagonals)
- Draw detection when all 9 cells are filled
- Winner / draw message with a **New Game** button
- **Reset Game** button to restart at any time
- Cells are disabled once played, and the board locks when a game ends
- Responsive layout using `vmin` units, so it scales on desktop and mobile

## Project Structure

```
.
├── index.html   # Page structure: board, buttons, message container
├── style.css    # Styling and responsive layout
└── game.js      # Game logic
```

## Getting Started

1. Download or clone the project files into one folder.
2. Open `index.html` in any modern web browser.

That's it. No build step or installation needed.

## How to Play

1. Player **X** goes first. Click any empty cell to place your mark.
2. Players alternate turns (X, then O).
3. The first player to get three marks in a row, column, or diagonal wins.
4. If all 9 cells are filled with no winner, the game is a draw.
5. Click **New Game** (shown after the game ends) or **Reset Game** (always visible) to play again.

## How It Works

- **Turn tracking:** a boolean `turn` flag decides whether X or O is placed; `count` tracks the number of moves.
- **Win checking:** `winConditions` holds the 8 winning index combinations. After each move, `checkWin()` compares the three cells of each combination.
- **Ending a game:** `showWinner()` displays the result and disables all cells. On a draw, the draw message is shown.
- **Resetting:** `resetGame()` clears the board, re-enables all cells, hides the message, and resets the turn and move count.

## Technologies Used

- HTML5
- CSS3 (Flexbox, `vmin` units)
- Vanilla JavaScript (ES6)

## Possible Improvements

- Add a score tracker across multiple rounds
- Show whose turn it is
- Add a single-player mode with a computer opponent
- Highlight the winning line
- Fix an edge case: if the ninth move wins the game, the draw message can overwrite the win message

## License

This project is open source and free to use for learning and personal projects.
