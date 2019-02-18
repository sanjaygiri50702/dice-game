var activePlayer = 1;
var player1Point = 0;
var player2Point = 0;
var diceRoll = (event)=>{
    var dice = Math.ceil(Math.random()*6);
    console.log('dice',dice);
    document.getElementById('dicevalue').innerText = dice;
    if(activePlayer == 1){
        // var dice = Math.ceil(Math.random()*6);
        document.getElementById('player2').style.backgroundColor = 'white';
        document.getElementById('player1').style.backgroundColor = 'grey';
        player1Point += dice;
        document.getElementById('player1point').innerText = player1Point;
        if(player1Point>=50){
            alert('winner is player 1');
        }
        activePlayer = 2;
    }
    else{
        // dice = Math.ceil(Math.random()*6);
        document.getElementById('player1').style.backgroundColor = 'white';
        document.getElementById('player2').style.backgroundColor = 'grey';
        player2Point += dice; 
        document.getElementById('player2point').innerText = player2Point;
        if(player2Point>=50){
            alert('winner is player 2');
        }
        activePlayer  = 1;
    }


}
document.querySelector('button').addEventListener('click',diceRoll);
