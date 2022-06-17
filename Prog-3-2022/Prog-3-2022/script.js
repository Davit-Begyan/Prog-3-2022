
var socket = io();


 side = 30

function setup() {
    createCanvas(7 * side, 13 * side);
    background("#acacac");
}


function nkarel(matrix) {
    console.log(matrix);
    
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
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
}



setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)

