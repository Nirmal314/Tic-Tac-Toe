// circle 1
// cross 2

var count = 0;
let p1, p2, s1, s2;
let isStarted = false;
let isWon = false;
var arr = new Array(3);
arr[0] = new Array(3);
arr[1] = new Array(3);
arr[2] = new Array(3);

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    arr[i][j] = 0;
  }
}

function startGame() {
  playAgain();
  p1 = document.getElementById("p1").value;
  p2 = document.getElementById("p2").value;
  s1 = document.getElementById("s1").value;
  s2 = document.getElementById("s2").value;

  const validInputs = ["X", "x", "O", "o"];

  if (p1 == "" || p2 == "" || s1 == "" || s2 == "") {
    alert("Enter the details.");
    playAgain();
  } else if (
    validInputs.every((item) => s1 !== item) ||
    validInputs.every((item) => s2 !== item) ||
    (s1 == "x" && s2 == "X") ||
    (s1 == "X" && s2 == "x") ||
    (s1 == "O" && s2 == "o") ||
    (s1 == "o" && s2 == "O")
  ) {
    alert("Enter valid signs.");
    playAgain();
  } else {
    alert("You can start the game.");
    isStarted = true;
  }
}
function playAgain() {
  count = 0;
  for (var i = 1; i <= 9; i++) {
    const cross_id = "b" + i + "-cross";
    const circle_id = "b" + i + "-circle";

    const tmp1 = document.getElementById(cross_id);
    const tmp2 = document.getElementById(circle_id);

    tmp1.style.display = "none";
    tmp2.style.display = "none";
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      arr[i][j] = 0;
    }
  }
}
function checkWin(arr) {
  if (arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1) {
    if (s1 == "O" || s1 == "o") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1) {
    if (s1 == "O" || s1 == "o") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1) {
    if (s1 == "O" || s1 == "o") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1) {
    if (s1 == "O" || s1 == "o") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1) {
    if (s1 == "O" || s1 == "o") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1) {
    if (s1 == "O" || s1 == "o") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1) {
    if (s1 == "O" || s1 == "o") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1) {
    if (s1 == "O" || s1 == "o") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][0] == 2 && arr[0][1] == 2 && arr[0][2] == 2) {
    if (s1 == "X" || s1 == "x") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[2][0] == 2 && arr[2][1] == 2 && arr[2][2] == 2) {
    if (s1 == "X" || s1 == "x") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[1][0] == 2 && arr[1][1] == 2 && arr[1][2] == 2) {
    if (s1 == "X" || s1 == "x") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][1] == 2 && arr[1][1] == 2 && arr[2][1] == 2) {
    if (s1 == "X" || s1 == "x") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][2] == 2 && arr[1][2] == 2 && arr[2][2] == 2) {
    if (s1 == "X" || s1 == "x") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][0] == 2 && arr[1][0] == 2 && arr[2][0] == 2) {
    if (s1 == "X" || s1 == "x") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][0] == 2 && arr[1][1] == 2 && arr[2][2] == 2) {
    if (s1 == "X" || s1 == "x") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  } else if (arr[0][2] == 2 && arr[1][1] == 2 && arr[2][0] == 2) {
    if (s1 == "X" || s1 == "x") {
      alert(p1 + " won !");
    } else {
      alert(p2 + " won !");
    }
    isWon = true;
  }
}
function show(passedId) {
  if (isStarted == false) {
    alert("Enter names and pressed Start Game button.");
  } else {
    if (count % 2 == 0 && count < 9) {
      const inner_id = passedId + "-circle"; // text id
      const tmp = document.getElementById(inner_id);

      var index =
        parseInt(inner_id.replace("b", "").replace("-circle", "")) - 1;
      if (index >= 0 && index <= 2) {
        if (arr[0][index] == 0) {
          arr[0][index] = 1;
          tmp.style.display = "flex";
          count++;
          checkWin(arr);
        }
      } else if (index >= 3 && index <= 5) {
        if (arr[1][index - 3] == 0) {
          arr[1][index - 3] = 1;
          tmp.style.display = "flex";
          count++;
          checkWin(arr);
        }
      } else {
        if (arr[2][index - 6] == 0) {
          arr[2][index - 6] = 1;
          tmp.style.display = "flex";
          count++;
          checkWin(arr);
        }
      }
      if (count == 9 && isWon == false) {
        alert("It's a draw !");
      }
    } else if (count % 2 != 0 && count < 9) {
      const inner_id = passedId + "-cross"; // text id
      const tmp = document.getElementById(inner_id);

      var index = parseInt(inner_id.replace("b", "").replace("-cross", "")) - 1;
      if (index >= 0 && index <= 2) {
        if (arr[0][index] == 0) {
          arr[0][index] = 2;
          tmp.style.display = "flex";
          count++;
          checkWin(arr);
        }
      } else if (index >= 3 && index <= 5) {
        if (arr[1][index - 3] == 0) {
          arr[1][index - 3] = 2;
          tmp.style.display = "flex";
          count++;
          checkWin(arr);
        }
      } else {
        if (arr[2][index - 6] == 0) {
          arr[2][index - 6] = 2;
          tmp.style.display = "flex";
          count++;
          checkWin(arr);
        }
      }
      if (count == 9 && isWon == false) {
        alert("It's a draw !");
      }
    }
  }
}

function reset() {
  document.getElementById("p1").value = "";
  document.getElementById("p2").value = "";
  document.getElementById("s1").value = "";
  document.getElementById("s2").value = "";

  playAgain();
}
