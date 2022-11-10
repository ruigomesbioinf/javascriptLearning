const cardArray = [
    {
        name: "fries",
        img: "assets/fries.png"
    },
    {
        name: "cheeseburger",
        img: "assets/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "assets/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "assets/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "assets/milkshake.png"
    },
    {
        name: "pizza",
        img: "assets/pizza.png"
    },
    {
        name: "fries",
        img: "assets/fries.png"
    },
    {
        name: "cheeseburger",
        img: "assets/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "assets/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "assets/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "assets/milkshake.png"
    },
    {
        name: "pizza",
        img: "assets/pizza.png"
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const scoreDisplay = document.querySelector("#result")
const cardsChosen = []
const cardsChosenID = []
let endGame = 0;
let score = 0;

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "assets/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function flipCard() {
    const cardID = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenID.push(cardID)
    this.setAttribute("src", cardArray[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout( catchMatch, 500) // call function after 0.5 seconds
    }
}

function catchMatch() {
    const cards = document.querySelectorAll("img")
    if (cardsChosen[0] === cardsChosen[1]){
        // alert("you matched")
        cards[cardsChosenID[0]].setAttribute("src", "assets/white.png")
        cards[cardsChosenID[1]].setAttribute("src", "assets/white.png")
        cards[cardsChosenID[0]].removeEventListener("click", flipCard)
        cards[cardsChosenID[1]].removeEventListener("click", flipCard)
        cardsChosen.length = 0
        cardsChosenID.length = 0
        scoreDisplay.innerHTML = score = score + 1
        endGame = endGame + 1
        checkWin()
    } else {
        cards[cardsChosenID[0]].setAttribute("src", "assets/blank.png")
        cards[cardsChosenID[1]].setAttribute("src", "assets/blank.png")
        cardsChosen.length = 0
        cardsChosenID.length = 0
    }
}

function checkWin() {
    if (endGame === cardArray.length/2) {
        scoreDisplay.innerHTML = "Congratulations, you found all the matches!"
    }
}