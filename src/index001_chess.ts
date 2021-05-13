
// チェスのゲームを表すぜ。
class Game {
    private pieces = Game.makePieces()

    private static makePieces() {
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
            
        ]
    }
}

// 駒の位置 (座標)だぜ。
class Position {
    constructor(
        private file: File,
        private rank: Rank
    ) {}
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

// チェスの駒だぜ。
type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        file: File,
        rank: Rank
    ) {
        this.position = new Position(file, rank)
    }

    moveTo(position: Position) {
        this.position = position
    }
    abstract canMoveTo(position: Position): Boolean
}

class King extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

/* class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}
 */