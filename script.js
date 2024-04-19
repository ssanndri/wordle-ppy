
let jugadas = 6
let diccionario = ["PIEZA", "PUERTA", "TEXTO","PIZZA"]
Math.floor(Math.random() * 10) + 1;
const palabraOculta = diccionario[Math.floor(Math.random() * diccionario.length)];


let verde = "#79b851"
let amarillo = "#f3c237"
let gris = "#a4aec4"

const button= document.getElementById("guess-button")
button.style.color = "white"
button.addEventListener("click", intentar)

function intentar (){
 const INTENTO = document.getElementById("guess-input").value.toUpperCase()
 jugadas--
 if (jugadas==0) {
   terminar("Perdiste")
 }
 if (palabraOculta == INTENTO){ 
   terminar("Ganaste")
 } else{
   let fila = document.createElement("div")
   fila.className = "row"
   console.log(fila)
   for (const i in INTENTO){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerText = INTENTO[i]
        fila.appendChild(letra)
        console.log(fila)
     if (INTENTO[i] == palabraOculta[i]){
        letra.style.background = verde
     } else if (palabraOculta.includes(INTENTO[i])){
       letra.style.background = amarillo
     } else {
       letra.style.background = gris
     }
   }
   let grilla = document.getElementById("grid")
   grilla.appendChild(fila)
  }
}

function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        button.disabled = true;
        
        let p= document. getElementById("guesses")
        p.innerHTML = "<h1>" + mensaje + "<h1>"
}