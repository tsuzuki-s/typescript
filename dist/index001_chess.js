"use strict";
// チェスのゲームを表すぜ。
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [
            // キングだぜ。
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            // クイーンだぜ。
            /*             new Queen('White', 'D', 1),
                        new Queen('Black', 'D', 8),
             */
            // ビショップだぜ。
            /*             new Bishop('White', 'C', 1),
                        new Bishop('White', 'F', 1),
                        new Bishop('Black', 'C', 8),
                        new Bishop('Black', 'F', 8),
             */
        ];
    }
}
// 駒の位置 (座標)だぜ。
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        };
    }
}
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
class King extends Piece {
    canMoveTo(position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
}
/* class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}
 */ 
//# sourceMappingURL=index001_chess.js.map