var matrix = [];
const side = 20;
let socket = io();
function setup() {
  // frameRate(20);

  var weath = "winter";

  let grassCountElement = document.getElementById("grassCount");
  let grassEaterCountElement = document.getElementById("grassEaterCount");
  let monsterCountElement = document.getElementById("monsterCount");
  let angelCountElement = document.getElementById("angelCount");
  let virusCountElement = document.getElementById("virusCount");

  socket.on("data", drawGame);
  socket.on("weather", function (data) {
    weath = data;
  });
  function drawGame(data) {
    console.log(weath);
    matrix = data.matrix;
    grassCountElement.innerText = data.grassCounter;
    grassEaterCountElement.innerText = data.grassEaterCounter;
    monsterCountElement.innerText = data.monsterCounter;
    angelCountElement.innerText = data.angelCounter;
    virusCountElement.innerText = data.virusCounter;

    createCanvas(matrix[0].length * side, matrix.length * side);

    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 1) {
          if (weath == "spring") {
            fill("green");
          } else if (weath == "summer") {
            fill("lightgreen");
          } else if (weath == "winter") {
            fill("#white");
          } else if (weath == "autumn") {
            fill("#f5db84");
          }
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 2) {
          fill("yellow");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 0) {
          if (weath == "spring") {
            fill("#e8f5da");
          } else if (weath == "summer") {
            fill("#faf0cf");
          } else if (weath == "winter") {
            fill("#b3b3b3");
          } else if (weath == "autumn") {
            fill("#e8f5da");
          }
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 3) {
          fill("black");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 4) {
          fill("blue");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 5) {
          fill("red");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 6) {
          fill("#990202");
          rect(j * side, i * side, side, side);
        }
        else if (matrix[i][j] == 7) {
          fill("#white");
          rect(j * side, i * side, side, side);
        }
        else if (matrix[i][j] == 8) {
          fill("#black");
          rect(j * side, i * side, side, side);
        }
      }
    }
  }
}

function kill() {
  socket.emit("kill");
}

function freezeGrassEater() {
  socket.emit("freezeGrassEater");
}

function animGrassEater() {
  socket.emit("animGrassEater");
}

function boom() {
  socket.emit("boom");
}

function anim() {
  socket.emit("anim");
}
