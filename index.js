const botones = document.querySelectorAll('.boton')
const turnoTexto = document.querySelector('#turno')
const reiniciar = document.querySelector('#reiniciar')
const reiniciarContadores =
    document.querySelector('#vic')
const xv = document.querySelector('#xv')
const ov = document.querySelector('#ov')
const ev = document.querySelector('#ev')

let tablero = [
    '', '', '',
    '', '', '',
    '', '', ''
]
let jugador = 'X'
let victoriasX = 0
let victoriasO = 0
let empates = 0

const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
]

function verificarGanador() {

    for (let combinacion of combinaciones) {

        let [a, b, c] = combinacion

        if (
            tablero[a] &&
            tablero[a] === tablero[b] &&
            tablero[a] === tablero[c]
        ) {

            turnoTexto.textContent =
                `Ganador ${jugador}`

            if (jugador === 'X') {
                victoriasX++
                xv.textContent =
                    `Victorias X : ${victoriasX}`
            } else {
                victoriasO++
                ov.textContent =
                    `Victorias O : ${victoriasO}`
            }

            botones.forEach(btn => {
                btn.disabled = true
            })

            return true
        }

    }

    return false
}

function verificarEmpate() {

    let lleno = tablero.every(
        casilla => casilla !== ''
    )

    if (lleno) {

        empates++

        ev.textContent =
            `Empates : ${empates}`

        turnoTexto.textContent =
            'Empate'

        return true
    }

    return false
}

botones.forEach((btn, index) => {

    btn.addEventListener('click', () => {

        tablero[index] = jugador

        btn.textContent = jugador

        btn.disabled = true

        btn.classList.add(
            jugador === 'X'
                ? 'jugador2'
                : 'jugador1'
        )

        if (verificarGanador()) return

        if (verificarEmpate()) return

        jugador =
            jugador === 'X'
                ? 'O'
                : 'X'

        turnoTexto.textContent =
            `Turno del jugador ${jugador}`

    })

})

reiniciar.addEventListener('click', () => {

    tablero = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]

    jugador = 'X'

    turnoTexto.textContent =
        'Turno del jugador X'

    botones.forEach(btn => {

        btn.textContent = ''

        btn.disabled = false

        btn.className = 'boton'

    })

})

reiniciarContadores.addEventListener('click', () => {

    victoriasX = 0
    victoriasO = 0
    empates = 0

    xv.textContent =
        'Victorias X : 0'

    ov.textContent =
        'Victorias O : 0'

    ev.textContent =
        'Empates : 0'

})