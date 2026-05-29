
let ganadorTM = "741"
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

    // ordenar jugadorX
    let jugadasOrdenadas = jugadorX
        .split('')
        .sort()
        .join('')

    for (let i = 0; i < combinacionesGanadoras.length; i++) {

        let combinacion = combinacionesGanadoras[i]

        tenporalG = ""

        for (let k = 0; k < combinacion.length; k++) {

            for (let j = 0; j < jugadasOrdenadas.length; j++) {

                if (jugadasOrdenadas[j] == combinacion[k]) {

                    tenporalG += combinacion[k]

                }

            }

        }

        // ordenar resultado antes de comparar
        tenporalG = tenporalG
            .split('')
            .sort()
            .join('')

        if (tenporalG == combinacion) {

            return "ganador 1487"
            break;

        }

    }

   
}

console.log(ganador())