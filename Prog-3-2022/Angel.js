class Angel extends LivingCreatureV2 {
    constructor(x, y, energy){
        super(x, y, energy);
        this.energy = energy;
    }
    mult() {
        var empty = random(this.chooseCell(0, 1))
        if (empty && this.energy > 250) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var ag = new Angel(newX, newY, 300)
            angelArr.push(ag)
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY

        }
    }

    eat() {
        var food1 = this.chooseCell(1)
        var food3 = this.chooseCell(3)
        var food5 = this.chooseCell(5)
        var food = random(food1.concat(food3, food5));
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 1
            matrix[this.y][this.x] = 0
            for (var i in gameArr) {
                if (gameArr[i].x == newX && gameArr[i].y == newY) {
                    gameArr.splice(i, 1)
                    this.energy += 20
                }
            }
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                    this.energy += 6
                }
            }
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
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
            for (var i in angelArr) {
                if (angelArr[i].x == this.x && angelArr[i].y == this.y) {
                    angelArr.splice(i, 1)
                }
            }
        }
    }
}
