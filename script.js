const blocks = document.querySelectorAll(".block");
const playerText  = document.querySelector(".player");
const errorText  = document.querySelector(".error");
let player = "X";
let gameOver = false
let winner;

function startGame (){
    playerText.textContent = `${player}'s Turn`


    blocks.forEach(block => block.addEventListener("click", () => chooseArea(block)))

};


function chooseArea (block){
    if (block.textContent === ""){
        block.textContent = player;
        turnPlayer();
    }
   
    else{
        errorText.textContent = "it's not empty"
        setTimeout(()=>{
            errorText.textContent = ""
        },2000)
        
    }
    if(player==="X"){
        block.style.color = "blue"
    }
    checkWin();
    checkDraw();

    if(gameOver){
        playerText.textContent = `Game is over ,${winner} won`
        blocks.forEach(block => block.style.pointerEvents = 'none')
    }
}

function turnPlayer(){
    if(player === "X"){
    player = "O";
    playerText.textContent = `${player}'s Turn`
    return;
    }else if(player === "O"){
        player = "X";
        playerText.textContent = `${player}'s Turn`
        
        }
}


startGame()

function checkWin() {
    //win
    checkRows()
    checkColumns()
    checkCapraz()
}

function checkDraw(){
    const values = []
    blocks.forEach(block => values.push(block.textContent))
    if(!values.includes("")){
        playerText.textContent = "Draw !"
        blocks.forEach(block => block.style.pointerEvents = 'none')
    }
    //draw
}

function checkRows(){
    let row1 = blocks[0].textContent === blocks[1].textContent
     && blocks[0].textContent === blocks[2].textContent&&blocks[0].textContent !==""
    
    let row2 = blocks[3].textContent === blocks[4].textContent
     && blocks[3].textContent === blocks[5].textContent&&blocks[3].textContent !==""
    
    let row3 = blocks[6].textContent === blocks[7].textContent
     && blocks[6].textContent === blocks[8].textContent&&blocks[6].textContent !==""

    if(row1||row2||row3){
        gameOver = true
    }
    if(row1) return winner = blocks[0].textContent
    if(row2) return winner = blocks[3].textContent
    if(row3) return winner = blocks[6].textContent

    

}

function checkColumns(){
    let col1 = blocks[0].textContent === blocks[3].textContent
     && blocks[0].textContent === blocks[6].textContent&&blocks[0].textContent !==""
    
    let col2 = blocks[1].textContent === blocks[4].textContent
     && blocks[1].textContent === blocks[7].textContent&&blocks[1].textContent !==""
    
    let col3 = blocks[2].textContent === blocks[5].textContent
     && blocks[2].textContent === blocks[8].textContent&&blocks[2].textContent !==""

    if(col1||col2||col3){
        gameOver = true
    }
    if(col1) return winner = blocks[0].textContent
    if(col2) return winner = blocks[1].textContent
    if(col3) return winner = blocks[2].textContent


}

function checkCapraz(){
    let cap1 = blocks[0].textContent === blocks[4].textContent
     && blocks[0].textContent === blocks[8].textContent&&blocks[0].textContent !==""
    
    let cap2 = blocks[2].textContent === blocks[4].textContent
     && blocks[2].textContent === blocks[6].textContent&&blocks[2].textContent !==""
    
    if(cap1||cap2){
        gameOver = true
    }
    if(cap1) return winner = blocks[0].textContent
    if(cap2) return winner = blocks[2].textContent
  
}


