let randomNumber=Math.floor(Math.random()*10+1);
let chances = 3;
document.getElementById("Guess").value ="";
document.getElementById("display").innerHTML = ("New Guess Started");


function checkNumber(){
    if(chances>0){
        let newNum = new Number(document.getElementById("Guess").value);
        if(randomNumber==newNum){
            document.getElementById("display").innerHTML = ("You Won !!! 😀, Try New Guess");
            document.getElementById("btnGuess").disabled = true;
            document.getElementById("Guess").disabled = true;
        }else if(newNum<randomNumber){
            chances--;
            document.getElementById("display").innerHTML = ("Invalid!! Guess is too Low  - " + chances + " Chances left");
        }else{
            chances--;
            document.getElementById("display").innerHTML = ("Invalid!! Guess is too High - " + chances + " Chances left");
        }
    }else{
        document.getElementById("display").innerHTML= ("No Chances Left !!! 😥, Try New Guess");
        document.getElementById("btnGuess").disabled = true;
        document.getElementById("Guess").disabled = true;
    }

}

function setNewNumber() {
    randomNumber =  Math.floor(Math.random()*10+1);   
    document.getElementById("display").innerHTML = ("New Guess Started");
    chances=3;
    document.getElementById("btnGuess").disabled = false;
    document.getElementById("Guess").value ="";
    document.getElementById("Guess").disabled = false;
}
