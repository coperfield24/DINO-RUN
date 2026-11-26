// Punto de arranque del juego y conecta los botones con su lógica

document.addEventListener("keydown", (event) => {
    if(event.code === "Space" || event.code === "ArrowUp"){
        event.preventDefault()
        jump()
    }
})