let LivingCreature = require('./LivingCreature')

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}




module.exports = class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.energy = 5;
    }


    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);

    }

    mult() {
        var emptyCells = this.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell && this.energy > 10) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3
            var gh = new Gishatich(newX, newY)
            gishatichArr.push(gh)
            this.energy -= 6
        }
    }

    move() {
        var emptyCells = this.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.energy--;
            this.x = newX
            this.y = newY

        }
    }


    eat() {
        var xotakerCells = this.chooseCell(1);
        // var xotakerCells = this.chooseCell(2);
        // const foodarr = [grassCells,xotakerCells]
        var newCell = xotakerCells[Math.floor(Math.random() * xotakerCells.length)]
        // console.log(xotakerCells);
        
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            // for (var i in grassArr) {
            //     if (grassArr[i].x == newX && grassArr[i].y == newY) {
            //         grassArr.splice(i, 1)
            //         this.energy ++
            //     }
            // }
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                    this.energy += 2
                }
            }

            this.x = newX
            this.y = newY
            
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }
}
