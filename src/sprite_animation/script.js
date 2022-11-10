let playerState = "run";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e){
    playerState = e.target.value
})



const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// load image to js
const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;
const staggeredFrames = 5;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;

const spriteAnimations = [];
const animationStates = [
    {
        name: "idle",
        frames: 7
    },
    {
        name: "jump",
        frames: 7
    },
    {
        name: "fall",
        frames: 7
    },
    {
        name: "run",
        frames: 9
    },
    {
        name: "dizzy",
        frames: 11
    },
    {
        name: "sit",
        frames: 5
    },
    {
        name: "roll",
        frames: 7
    },
    {
        name: "bite",
        frames: 7
    },
    {
        name: "ko",
        frames: 12
    },
    {
        name: "gethit",
        frames: 4
    }
];

animationStates.forEach((state, index) => {
    let frames  = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});


// function to animate sprite
function animate(){
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // context.fillRect(50, 50, 100, 100);
    // context.drawImage(image, srx_x, src_y, src_w, src_h, dis_x, dis_y, dis_w, dis_h);
    let position = Math.floor(gameFrame/staggeredFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    context.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
