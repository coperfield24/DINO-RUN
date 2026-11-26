// Se encarga del movimiento del dinosaurio

const dinosaur = document.getElementById("dino")

function jump(){
    if(!dinosaur.classList.contains("jumping")){
        dinosaur.classList.add("jumping")
    }
}

dinosaur.addEventListener("animationend", () => {
    dinosaur.classList.remove("jumping")
})