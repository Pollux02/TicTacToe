var actualPlayer = 'X';
var gameMap = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]


function onClickCell(x, y, index) {

    if(gameMap[x][y] == ''){
        var selectedCell = document.querySelector('.grid-item:nth-child(' + (index + 1) + ')');
        var textoCelda = document.getElementById('textInfo');

        selectedCell.textContent = actualPlayer;
        gameMap[x][y] = actualPlayer;

        if(isWinner(x,y)){
            textoCelda.textContent = "El jugador "+actualPlayer+" ha ganado!!!.";
        }
        else if(isTie()){
            textoCelda.textContent = "Es un empate.";
        }
        else{
            if(actualPlayer == 'X'){
                actualPlayer = 'O';
            }
            else{
                actualPlayer = 'X';
            }
        }
    }    
}

function isWinner(x, y) {
    // Comprobación horizontal
    if (
        (y + 2 < gameMap[x].length &&
            gameMap[x][y] == actualPlayer &&
            gameMap[x][y + 1] == actualPlayer &&
            gameMap[x][y + 2] == actualPlayer) ||
        (y - 2 >= 0 &&
            gameMap[x][y] == actualPlayer &&
            gameMap[x][y - 1] == actualPlayer &&
            gameMap[x][y - 2] == actualPlayer) ||
        (y - 1 >= 0 && y + 1 < gameMap[x].length &&
            gameMap[x][y - 1] == actualPlayer &&
            gameMap[x][y + 1] == actualPlayer)
    ) {
        return true;
    }

    // Comprobación vertical
    if (
        (x + 2 < gameMap.length &&
            gameMap[x][y] == actualPlayer &&
            gameMap[x + 1][y] == actualPlayer &&
            gameMap[x + 2][y] == actualPlayer) ||
        (x - 2 >= 0 &&
            gameMap[x][y] == actualPlayer &&
            gameMap[x - 1][y] == actualPlayer &&
            gameMap[x - 2][y] == actualPlayer) ||
        (x - 1 >= 0 && x + 1 < gameMap.length &&
            gameMap[x - 1][y] == actualPlayer &&
            gameMap[x + 1][y] == actualPlayer)
    ) {
        return true;
    }

    // Comprobación diagonal hacia la derecha
    if (
        (x + 2 < gameMap.length && y + 2 < gameMap[x].length &&
            gameMap[x][y] == actualPlayer &&
            gameMap[x + 1][y + 1] == actualPlayer &&
            gameMap[x + 2][y + 2] == actualPlayer) ||
        (x - 2 >= 0 && y - 2 >= 0 &&
            gameMap[x][y] == actualPlayer &&
            gameMap[x - 1][y - 1] == actualPlayer &&
            gameMap[x - 2][y - 2] == actualPlayer) ||
        (x - 1 >= 0 && x + 1 < gameMap.length && y - 1 >= 0 && y + 1 < gameMap[x].length &&
            gameMap[x - 1][y - 1] == actualPlayer &&
            gameMap[x + 1][y + 1] == actualPlayer)
    ) {
        return true;
    }

    // Comprobación diagonal hacia la izquierda
    if (
        (x + 2 < gameMap.length && y - 2 >= 0 &&
            gameMap[x][y] == actualPlayer &&
            gameMap[x + 1][y - 1] == actualPlayer &&
            gameMap[x + 2][y - 2] == actualPlayer) ||
        (x - 2 >= 0 && y + 2 < gameMap[x].length &&
            gameMap[x][y] == actualPlayer &&
            gameMap[x - 1][y + 1] == actualPlayer &&
            gameMap[x - 2][y + 2] == actualPlayer) ||
        (x - 1 >= 0 && x + 1 < gameMap.length && y - 1 >= 0 && y + 1 < gameMap[x].length &&
            gameMap[x - 1][y + 1] == actualPlayer &&
            gameMap[x + 1][y - 1] == actualPlayer)
    ) {
        return true;
    }

    return false;
}

function isTie()
{
    for (var i = 0; i < gameMap.length; i++) {
        for (var j = 0; j < gameMap[i].length; j++) {
            if(gameMap[i][j] == ''){
                return false;
            }
        }
    }
    
    return true;
}