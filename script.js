const canvas = document.getElementById("dino-game")
const context = canvas.getContext("2d")

const dinoSprite = new Image()
dinoSprite.src = "assets/images/dino.png"

const SPRITE_FRAME_SIZE = 256
const DINO_SCALE = 0.5
const DINO_SIZE = SPRITE_FRAME_SIZE * DINO_SCALE
const DINO_DRAW_X = 0
const GROUND = canvas.height
let frameColumn = 0
let frameRow = 0
let dinoDrawY = GROUND - DINO_SIZE

function drawDino(){
    const spriteX = frameColumn * SPRITE_FRAME_SIZE
    const spriteY = frameRow * SPRITE_FRAME_SIZE

    context.drawImage(dinoSprite, spriteX, spriteY, SPRITE_FRAME_SIZE, SPRITE_FRAME_SIZE, DINO_DRAW_X, dinoDrawY, DINO_SIZE, DINO_SIZE)
}

dinoSprite.addEventListener("load", drawDino)