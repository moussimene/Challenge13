
const list=["pierre", "papier","ciseaux"]

let pierreBtn=document.getElementById("rock");
let papierBtn=document.getElementById("paper")
let ciseauxBtn=document.getElementById("scissors");

let resultat=document.querySelector(".result")

let score=0;
let computerScore=0;

function computerClick() {
    let pcClick=list[Math.floor(Math.random() * 3)];
    return pcClick
}
 
pierreBtn.addEventListener("click", () => {
    let computerChoice=computerClick()

   if(computerChoice==="pierre"){
    console.log(score)
    console.log(computerScore)
    
    resultat.innerText=' Your score is : '+score+ ' Computer score is ' +computerScore
   }
   if(computerChoice==="papier"){
    computerScore=computerScore+1;

    console.log(score)
    console.log(computerScore)
    resultat.innerText=' Your score is : '+score+ ' Computer score is ' +computerScore
     
   }
   if(computerChoice==="ciseaux"){
    score=score+1;   
     
    console.log(score)
    console.log(computerScore)
    resultat.innerText=' Your score is : '+score+ ' Computer score is ' +computerScore
   }
});

//Si je Click papier

papierBtn.addEventListener("click", () => {
    let computerChoice=computerClick()

   if(computerChoice==="pierre"){
     score=score+1;
    
     resultat.innerText=' Your score is : '+score+ ' Computer score is ' +computerScore
   }
   if(computerChoice==="papier"){
   
    resultat.innerText=' Your score is : '+score+ ' Computer score is ' +computerScore
     
   }
   if(computerChoice==="ciseaux"){
    computerScore=computerScore+1;  
     
    resultat.innerText=' Your score is : '+score+ ' Computer score is ' +computerScore

   }
});


//Si je click ciseaux
ciseauxBtn.addEventListener("click", () => {
    let computerChoice=computerClick()

   if(computerChoice==="pierre"){
     computerScore=computerScore+1;
    
     resultat.innerText=' Your score is : '+score+ ' Computer score is ' +computerScore
   }
   if(computerChoice==="papier"){
   score=score+1;
   resultat.innerText=' Your score is : '+score+ ' Computer score is ' +computerScore
     
   }
   if(computerChoice==="ciseaux"){ 
     
    resultat.innerText=' Your score is : '+score+ ' Computer score is ' +computerScore

   }
});

 