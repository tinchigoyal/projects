function coinToss(){
    var coinNumber = Math.floor((Math.random() * 10) + 1);
    if(coinNumber % 2 == 0){
        document.getElementById("coin-toss").src = 'assets/img/bit-tail.png';
        document.getElementById("coin-toss-text").innerHTML = 'Tail';
    }
    else{
        document.getElementById("coin-toss").src = 'assets/img/bit-head.png';
        document.getElementById("coin-toss-text").innerHTML = 'Head';
    }
}


function coinTossGif() {
    document.getElementById("coin-toss").src = 'assets/img/coin-flipping.gif';
    document.getElementById("coin-toss-text").innerHTML = 'Coin is Flipping';
    setTimeout ( "coinToss()", 2000 );
}