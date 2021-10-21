let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  let targeted_h1 = document.querySelector("h1", ".turn");
  targeted_h1.innerText = turn.toUpperCase() + " turn";
  console.log(targeted_h1)
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
    let win = false;
    for(let i=0; i<3; i++) 
    {
      if(symbols[i][0]==symbols[i][1] && symbols[i][1]==symbols[i][2] && symbols[i][1]!=""){
        alert("Wygrana - seria w pionie");
        win = true;
       }
    }

    for(let i=0; i<3; i++) 
    {
      if(symbols[0][i]==symbols[1][i] && symbols[1][i]==symbols[2][i] && symbols[1][i]!=""){
        alert("Wygrana - seria w poziomie");
        win = true;
       }
    }

    if((symbols[0][0]==symbols[1][1] && symbols[1][1]==symbols[2][2] && symbols[2][2]!="") || (symbols[2][0]==symbols[1][1] && symbols[1][1]==symbols[0][2] && symbols[2][0]!=""))
    {
      alert("Wygrana - seria w przekątnej");
      win = true;
    }

    if(win==true){
      alert("Koniec gry");
      reset()
    }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset

  function reset() {
    symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
    let tiles_to_clear = document.querySelector(".board").children;
    for(let i=0; i<9; i++)
    {
      tiles_to_clear[i].classList = "tile";
    }
  }

  let btn = document.querySelector(".reset");
  btn.addEventListener("click", reset)
