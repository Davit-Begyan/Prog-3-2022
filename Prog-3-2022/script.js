var matrix = []; 
var rows = 30; 
var columns = 40; 
var side = 20;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }


for (var y = 0; y < rows; y++) {
matrix[y] = []; 
for (var x = 0; x < columns; x++) {
var a = getRandomInt(100);
if (a >= 0 && a < 20) {
matrix[y][x] = 0; 
}
if (a >= 20 && a < 78) {
matrix[y][x] = 1; 
}
else if (a >= 78 && a < 88) {
matrix[y][x] = 2; 
}
else if (a >= 88 && a < 98) {
matrix[y][x] = 3; 
}
else if (a >= 98 && a < 99) {
matrix[y][x] = 4; 
}
else if (a >= 99 && a < 100) {
matrix[y][x] = 5; 
}
}
}

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var gameArr = [];
var angelArr = [];

function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }  
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gh = new Gishatich(x, y)
                gishatichArr.push(gh)
            }
            else if (matrix[y][x] == 5) {
                var gm = new Game_over(x, y, 20)
                gameArr.push(gm)
            }
            else if (matrix[y][x] == 4) {
                var ag = new Angel(x, y, 25)
                angelArr.push(ag)
            
            
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
}

function draw() {
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("Green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("white");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side)
        }
    }
    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {

        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in angelArr) {

        angelArr[i].eat()
        angelArr[i].move()
        angelArr[i].mult()
        angelArr[i].die()
    }
    for (var i in gameArr) {

        gameArr[i].eat()
        gameArr[i].move()
        gameArr[i].mult()
        gameArr[i].die()
    }
}