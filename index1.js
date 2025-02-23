function gestureRoll(choiceOfUser){
    const options=["rock","paper","scissors"];
    const computerGesture=options[Math.floor(Math.random()*3)];

    let result="";
    if(choiceOfUser===computerGesture){
        result="It's a tie!";
    } else if(
        (choiceOfUser==="rock"&&computerGesture==="paper") || (choiceOfUser==="paper"&&computerGesture==="scissors") || (choiceOfUser==="scissors"&&computerGesture==="rock")
    ){
        result="Computer wins!";
    } else{
        result="You win!";
    }

    document.getElementById("end").innerHTML=result;

}