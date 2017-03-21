var makeBoard = require('./makeBoard');

function robotPaths(n) {
    return robotPathsHelper(makeBoard(n), 0, 0);
}

function robotPathsHelper(board = [], x, y) {
    if(x === board.length || y === board.length || x < 0 || y < 0 || board[x][y]) {
        return 0;
    }

    if(x === board.length - 1 && y === board.length - 1) {
        return 1
    }

    board[x][y] = true;

    let sum = 0;

    sum += robotPathsHelper(board, x + 1, y);
    sum += robotPathsHelper(board, x - 1, y);
    sum += robotPathsHelper(board, x, y + 1);
    sum += robotPathsHelper(board, x, y - 1);

    board[x][y] = false;
    
    return sum;
}

console.log(robotPaths(1));
console.log(robotPaths(2));
console.log(robotPaths(3));
console.log(robotPaths(4));
console.log(robotPaths(5));
console.log(robotPaths(6));