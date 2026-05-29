let bot = document.querySelectorAll('.boton')
let turno = document.querySelector('#turno')
let contador = 1
let mod = 0
let jugadorO = ''


let ganadorTM = "1487"
let texto = ""
let tenporalG = ""
let jugadorX = ''
let combinacionesGanadoras = [
    '012',
    '345',
    '678',
    '036',
    '147',
    '258',
    '048',
    '246'
];




function ganador() {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {

        if (ganadorTM == combinacionesGanadoras[i]) {
            contador = -1
            turno.textContent = texto
            return "ganador" + 1487
            break;
        } else {

            let ganador = combinacionesGanadoras[i]
            tenporalG = ""
            for (let k = 0; k < ganador.length; k++) {

                for (let j = 0; j < jugadorX.length; j++) {

                    if (jugadorX[j] == ganador[k]) {
                        tenporalG = tenporalG.concat(ganador[k])
                    }

                }
            }
            console.log(tenporalG+"hola")

        }
        if (tenporalG == combinacionesGanadoras[i]) {
            contador = -1
            turno.textContent = texto
            return "ganador" + 1487
            break;

        }

    }



}



console.log(ganador())

bot.forEach(bot => {
    bot.addEventListener("click", (event) => {
console.log("652586+259+215415461654")
        if (contador > 0) {
            contador = contador + 1
            mod = contador % 2
            if (mod == 0) {


                console.log(jugadorX)
                jugadorX += event.target.textContent
                event.target.textContent = "X"
                bot.classList.add('jugador2')
                turno.textContent = "turno del jugador O"
                ganadorTM = jugadorX
                texto = "Ganador X"
                console.log(jugadorX+"jugadorx")
                if(jugadorX.length>=3){
                    ganador()
                }
              


            } else {

           
                console.log(jugadorX)
                jugadorO += event.target.textContent
                event.target.textContent = "O"
                bot.classList.add('jugador1')
                turno.textContent = "turno del jugador X"
                ganadorTM = jugadorO
                texto = "Ganador O"
                console.log(jugadorX+"jugadorx")
                if(jugadorX.length>=3){
                    ganador()
                }
              
            }

        } if (contador > 9) {
            contador = -1
            turno.textContent = "Empate"
        }



    })

})



