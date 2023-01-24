let pecaDeXadrez = "King";

switch (pecaDeXadrez.toLowerCase()) {
    case "pawn":
    console.log("moves foward one or two squares");
    break;

    case "bishop":
    console.log("moves diagonally");
    break;

    case "knight":
    console.log("moves in L-shape");
    break;

    case "rook":
    console.log("moves horizontally or vertically in straight line");
    break;

    case "queen":
    console.log("moves in any direction");
    break;

    case "king":
    console.log("moves 1 square in any direction");
    break;

    default:
    console.log("Erro inesperado");
}


