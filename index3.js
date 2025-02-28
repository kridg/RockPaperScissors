function rollWeapon(userChoice){
    const weaponsToChoose=['rock','paper','scissors'];
    const cpChoice=weaponsToChoose[Math.floor(Math.random()*3)];

    let result="";
    if(userChoice===cpChoice){
        result="Its a tie!!!!!";
    } else if((userChoice==="rock"&&cpChoice ==="paper") || (userChoice==="paper"&&cpChoice==="scissors") || (userChoice==="scissors"&&cpChoice==="rock")){
        result="You lose!";
    } else{
        result="You Win!";
    }
    document.getElementById("result").innerHTML=result;
}