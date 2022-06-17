var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);




function generate(a, Grass, Xotaker, Gishatich, Angel, Game_over) {
    matrix = []
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < a; j++) {
            matrix[i].push(0)
        }
    }
    for (var i = 0; i < Grass; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){

            if (matrix[x][y] == 0) {
                matrix[x][y] = 1
    
            }
        }

    }
    for (var i = 0; i < Xotaker; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){

            if (matrix[x][y] == 0) {
                matrix[x][y] = 2
    
            }
        }

    }
    for (var i = 0; i < Gishatich; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){

            if (matrix[x][y] == 0) {
                matrix[x][y] = 3
    
            }
        }

    } for (var i = 0; i < Angel; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                    if (matrix[x][y] == 0) {
            matrix[x][y] = 4

        }
        }


    }for (var i = 0; i < Game_over; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
              if (matrix[x][y] == 0) {
            matrix[x][y] = 5

        }
        }
      

    }

    return matrix;

}

matrix = generate(50,30,20,20,3,1)
console.log(matrix);

io.sockets.emit('send matrix', matrix);






grassArr = [];
xotakerArr = [];
gishatichArr = [];
angelArr = [];
gameArr = [];


Grass = require("./Grass")
Xotaker = require("./Xotaker")
Gishatich = require("./Gishatich")
Angel = require("./Angel")
Game_over = require("./Game_over")


function createObject() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] === 1) {

                grassArr.push(new Grass(x, y));
            } else if (matrix[y][x] === 2) {

                xotakerArr.push(new Xotaker(x, y));
            } else if (matrix[y][x] === 3) {

                gishatichArr.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] === 4) {

                angelArr.push(new Angel(x, y));
            }else if (matrix[y][x] === 5) {

                gameArr.push(new Game_over(x, y));
            }
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function game() {
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mult()

    }
    for (let i = 0; i < xotakerArr.length; i++) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()

    }
    for (let i = 0; i < gishatichArr.length; i++) {
        // debugger;
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()

    }
    for (let i = 0; i < angelArr.length; i++) {
        angelArr[i].eat()
        angelArr[i].move()
        angelArr[i].mult()
        angelArr[i].die()
    }
    for (let i = 0; i < gameArr.length; i++) {
        gameArr[i].eat()
        gameArr[i].move()
        gameArr[i].mult()
        gameArr[i].die()
    } io.sockets.emit("send matrix", matrix);
}
setInterval(game, 1000);

io.on('connection', function (socket) {
    createObject()
})







