// TIMER PARA TIRO PRACTICO

// import React from 'react'
import useSound from 'use-sound';
import monacobb from '/src/components/BipSound.mp3';




function Bip() {

const [playSound] = useSound(monacobb)
const iniciar = () => {
    setTimeout(playSound, 4000)
    setTimeout(playSound, 8000)
}

    return (
        <div>
            <button onClick={iniciar}> sonar </button>
        </div>
    )
}

export default Bip

