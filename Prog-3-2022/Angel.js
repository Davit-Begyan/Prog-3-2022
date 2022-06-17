let LivingCreatureV2 = require('./LivingCreature')

module.exports = class Angel extends LivingCreatureV2 {
    constructor(x, y, energy){
        super(x, y, energy);
        this.energy = energy;
    }
    mult() {
        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell && this.energy > 250) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            var ag = new Angel(newX, newY, 300)
            angelArr.push(ag)
        }
    }
    move() {
        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        this.energy--;
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY

        }
    }

    eat() {
        var gameCells = super.chooseCell(5);
        var newCell = gameCells[Math.floor(Math.random() * gameCells.length)]
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in gameArr) {
                if (gameArr[i].x == newX && gameArr[i].y == newY) {
                    gameArr.splice(i, 1)
                    this.energy += 20
                }
            }
            // for (var i in gishatichArr) {
            //     if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
            //         gishatichArr.splice(i, 1)
            //         this.energy += 6
            //     }
            // }
            // for (var i in grassArr) {
            //     if (grassArr[i].x == newX && grassArr[i].y == newY) {
            //         grassArr.splice(i, 1)
            //         this.energy += 2
            //     }
            // }

            this.x = newX
            this.y = newY

        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in angelArr) {
                if (angelArr[i].x == this.x && angelArr[i].y == this.y) {
                    angelArr.splice(i, 1)
                }
            }
        }
    }
}
