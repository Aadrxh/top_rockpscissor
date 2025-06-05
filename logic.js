let humanscore=0;
let computerscore=0;


function getcomputerchoice(){
    let num=Math.random()
    if (num<0.33){
        return "Rock"
    }
    else if (0.33<num && num<0.66){
        return "Paper"
    }
    else{
        return "Scissor"
    }
}


function gethumanchoice(){
    let choice=prompt("R,P,S ?")
    if (choice==="R"){
        return "Rock"
    }
    else if (choice==="P"){
        return "Paper"
    }
    else if (choice==="S"){
        return "Scissor"
    }
}


function playround(){
    let hc=gethumanchoice()
    let cc=getcomputerchoice()
    if (hc===cc){
        console.log("Its a draw");
    }
    else if ((hc === "Rock" && cc === "Scissor") ||
        (hc === "Paper" && cc === "Rock") ||
        (hc === "Scissor" && cc === "Paper")){
            console.log(`You Win, ${hc} beats ${cc}`);
            humanscore++;
        }
    else{
            console.log(`You Lose, ${cc} beats ${hc}`);
           computerscore++;


    }
    
   

}

function playgame(){
    let amount=prompt("How many rounds do u want to play?");
    for(let i=1;i<=amount;i++){
        playround();
    }
    if (humanscore > computerscore) {
        console.log("You won the game!");
    } else if (computerscore > humanscore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a draw!");
    }

}
playgame()