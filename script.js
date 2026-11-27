const canvas = document.getElementById("dinoGame")
const ctx = canvas.getContext("2d")

const dinoSprite = new Image()
dinoSprite.src = "assets/images/dino.png"

dinoSprite.addEventListener("load", () => {
    ctx.drawImage(dinoSprite, 0, 0, 256, 256, 0, 280, 128, 128)
})