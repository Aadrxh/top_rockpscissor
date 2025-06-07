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




function playround(hc){
    let cc=getcomputerchoice()
    if (hc===cc){
        result="Its a draw";
    }
    else if ((hc === "Rock" && cc === "Scissor") ||
        (hc === "Paper" && cc === "Rock") ||
        (hc === "Scissor" && cc === "Paper")){
            result=`You Win, ${hc} beats ${cc}`;
            humanscore++;
        }
    else{
            result=`You Lose, ${cc} beats ${hc}`;
           computerscore++;


    }

    document.getElementById("result").textContent=result
    document.getElementById("score").textContent=`Player:${humanscore} | Computer:${computerscore}` 
    if (humanscore === 5 || computerscore === 5) {
        let finalResult = humanscore === 5 ? "You won the game!" : "Computer won the game!";
        document.getElementById("finalResult").textContent = finalResult;
        disableButtons();
    }   
   

}

function disableButtons(){
    let buttons=document.getElementsByTagName("button");
    for(let i=0;i<buttons.length;i++){
        buttons[i].disabled=true;
    }
}

let rockbutton=document.getElementById("Rock");
rockbutton.addEventListener("click",function() {playround("Rock")});

let paperbutton=document.getElementById("Paper");
paperbutton.addEventListener("click",function() {playround("Paper")});

let scissorbutton=document.getElementById("Scissor");
scissorbutton.addEventListener("click",function() {playround("Scissor")});

