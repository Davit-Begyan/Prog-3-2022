let LivingCreatureV2 = require('./LivingCreature')

module.exports = class Game_over extends LivingCreatureV2 {
    
    constructor(x, y, energy){
        super(x, y, energy);
        this.energy = energy;
    }
    mult() {
        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell && this.energy > 350) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 5
            var gm = new Game_over(newX, newY, 400)
            gameArr.push(gm)
        }
    }

    move() {
        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        this.energy += 2;
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var AngelCells = super.chooseCell(5);
        var newCell = AngelCells[Math.floor(Math.random() * AngelCells.length)]
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    this.energy++
                }
            }
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                    this.energy += 2
                }
            }
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                    this.energy += 5
                }
            }
            for (var i in angelArr) {
                if (angelArr[i].x == this.x && angelArr[i].y == this.y) {
                    angelArr.splice(i, 1)
                    this.energy += 6
                }
            }

            this.x = newX
            this.y = newY

            }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gameArr) {
                if (gameArr[i].x == this.x && gameArr[i].y == this.y) {
                    gameArr.splice(i, 1)
                }
            }
        }
    }

}