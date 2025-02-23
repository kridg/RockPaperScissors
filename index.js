function weaponRoll(userWeapon){
    const choices=["rock","paper","scissors"];
    const choiceOfWeapon=choices[Math.floor(Math.random()*3)];

    let decision="";
    if(userWeapon===choiceOfWeapon){
        decision="It's a tie!";
    }else if(userWeapon==="rock" && choiceOfWeapon==="paper"){
        decision="Computer winss!";
    } else if(userWeapon==="paper"&& choiceOfWeapon==="scissors"){
        decision="Computer wins!";
    } else if(userWeapon==="scissors" && choiceOfWeapon==="rock"){
        decision="Computer wins!";
    } else if(userWeapon==="rock" && choiceOfWeapon==="scissors"){
        decision="You win!";
    } else if(userWeapon==="paper" && choiceOfWeapon==="rock"){
        decision="You win!";
    } else if(userWeapon==="scissors"&& choiceOfWeapon==="paper"){
        decision="You win!";
    }
    document.getElementById("result").innerHTML=decision;
}