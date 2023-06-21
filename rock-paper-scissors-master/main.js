
const handOptions = {
    'Rock': "./images/Rock.png",
    'Paper': "./images/Paper.png",
    'Scissors': "./images/Scissors.png"
}
let SCORE = 0;
const pickUserHand = (hand) => {
    console.log(hand);

    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
   

    document.getElementById("userPickedImage").src = handOptions[hand];
   
    let cpHand = pickComputerHand();   
    result(hand, cpHand)
}

const pickComputerHand = () => {
    let hands = ["Rock", "Paper", "Scissors"]
    let cpHand = hands[Math.floor(Math.random() * 3)]
    
    document.getElementById("cpuImage").src = handOptions[cpHand];

    return cpHand;
}

const result = (userHand, cpHand) => {
    if(userHand === "Paper" && cpHand === "Rock") {
     setDecision("YOU WIN");
     setScore(SCORE + 1);
    } 
    if(userHand === "Paper" && cpHand === "Scissors") {
        setDecision("YOU LOSE");
    }
    if (userHand === "Paper" && cpHand === "Paper") {
        setDecision("TIE");
    }
    if(userHand === "Rock" && cpHand === "Scissors") {
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    } 
    if(userHand === "Rock" && cpHand === "Paper") {
           setDecision("YOU LOSE");
    } 
    if (userHand === "Rock" && cpHand === "Rock") {
           setDecision("TIE");
    }
    if(userHand === "Scissors" && cpHand === "Paper") {
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    }
    if(userHand === "Scissors" && cpHand === "Rock") {
           setDecision("YOU LOSE");
    }
    if (userHand === "Scissors" && cpHand === "Scissors") {
           setDecision("TIE");
    }

}
const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}


const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}

const openRules = (rule) => {
    
    document.querySelector(".rule").src = "./images/image-rules.svg"
}

