
let stone=document.querySelector(".stone");

let paper=document.querySelector(".paper");

let scissor=document.querySelector(".scissor");

let para=document.querySelector("#result");

let user_score=document.querySelector("#user-score");

let comp_score=document.querySelector("#computer-score");

let userscore=0;
let compscore=0;
let userchoice;
let compchoice;

stone.addEventListener("click",()=>{
userchoice="stone";
compchoices();   
})
paper.addEventListener("click",()=>{
userchoice="paper";
compchoices();   
})
scissor.addEventListener("click",()=>{
userchoice="scissor";
compchoices();   
})
function compchoices(){
compchoice=Math.floor(Math.random()*3+1);
console.log(compchoice);
if(compchoice==1){
    compchoice="stone";
    
    getchoice();
}
else if(compchoice==2){
    compchoice="paper";
   
    getchoice(); 
}
else if(compchoice==3){
    compchoice="scissor";
 
    getchoice();  
}
}

const getchoice=()=>{
if(userchoice==compchoice){
    para.innerText="It was draw";
    para.style.backgroundColor="grey";
}
else if(userchoice=="stone"){
       if(compchoice=="paper"){
        para.innerText="You lost.paper beats rock";
       para.style.backgroundColor="red";
       console.log("You lost.paper beats rock");
       comps();  
       }
      else {
       para.innerText="You win.rock beats scissor"; 
      para.style.backgroundColor="green";
      users();
    console.log("You win.rock beats scissor");
       }
}
else if(userchoice=="paper"){
      if(compchoice=="stone"){
       para.innerText="You win.paper beats rock";
      para.style.backgroundColor="green";
      console.log("You win.paper beats rock")
      users();
       }
      else if(compchoice=="scissor"){
      para.innerText="You lost.scissor beats paper";
      para.style.backgroundColor="red";
      console.log("You lost.scissor beats paper");
      comps();  
         }
}
else if(userchoice=="scissor"){

        if(compchoice=="stone"){
      para.innerText="You lost.stone beats scissor";
      para.style.backgroundColor="red";
      comps(); 
    console.log("You lost.stone beats scissor") 
     }
        else if(compchoice=="paper")   {
        para.innerText="You win.scissor beats paper"; 
        para.style.backgroundColor="green";
        users();  
        console.log("You win.scissor beats paper")
    }
}
} 

function users(){
 userscore++;
 user_score.innerText=userscore;
 if(userscore==10){
    para.innerText="User wins the game :)";
    para.style.backgroundColor="blue";
   
 }
    
}
function comps(){
compscore++;
comp_score.innerText=compscore; 
if(compscore==10){
    para.innerText="Computer wins the game :(";
    para.style.backgroundColor="purple";
   
 }  
}



