import React, { useState, useEffect } from 'react'

const Cidades = () => {
    const [cidade1, setCidade1] = useState(0) //
    const [cidade2, setCidade2] = useState(0)
    const [cidade3, setCidade3] = useState(0)
    const [cidade4, setCidade4] = useState(0)
    const [maisVotada, setMaisVotada] = useState(0)
    const [menosVotada, setMenosVotada] = useState(0)
    useEffect(() => {
        if (cidade1 > cidade2 && cidade1 > cidade3 && cidade1 > cidade4) {
            setMaisVotada("Fortaleza")
        }
        else if (cidade2 > cidade1 && cidade2 > cidade3 && cidade2 > cidade4) {
            setMaisVotada("Quixadá")
        }
        else if (cidade3 > cidade1 && cidade3 > cidade2 && cidade3 > cidade4) {
            setMaisVotada("Baturité")
        }
        else if (cidade4 > cidade1 && cidade4 > cidade2 && cidade4 > cidade3) {
            setMaisVotada("Aracoiaba")
        }
        else {
            setMaisVotada("Empate")
        }
        if (cidade1 < cidade2 && cidade1 < cidade3 && cidade1 < cidade4) {
            setMenosVotada("Fortaleza")
        }
        else if (cidade2 < cidade1 && cidade2 < cidade3 && cidade2 < cidade4) {
            setMenosVotada("Quixadá")
        }
        else if (cidade3 < cidade1 && cidade3 < cidade2 && cidade3 < cidade4) {
            setMenosVotada("Baturité")
        }
        else if (cidade4 < cidade1 && cidade4 < cidade2 && cidade4 < cidade3) {
            setMenosVotada("Aracoiaba")
        }
        else {
            setMenosVotada("Empate")
        }
    }
        ,
        [cidade1, cidade2, cidade3, cidade4]
    )
    const aumentaCidade1 = () => {
        setCidade1(cidade1 + 1)
    }
    const aumentaCidade2 = () => {
        setCidade2(cidade2 + 1)
    }
    const aumentaCidade3 = () => {
        setCidade3(cidade3 + 1)
    }
    const aumentaCidade4 = () => {
        setCidade4(cidade4 + 1)
    }
    return (
        <>
            <h1>Fortaleza: {cidade1} </h1>
            <h1>Quixadá: {cidade2} </h1>
            <h1>Baturité: {cidade3} </h1>
            <h1>Aracoiaba: {cidade4} </h1>
            <h1>Cidade mais votada: {maisVotada} </h1>
            <h1>Cidade menos votada: {menosVotada} </h1>
            <button
                onClick={aumentaCidade1}
            >
                Fortaleza +1
            </button>
            <button
                onClick={aumentaCidade2}
            >
                Quixadá +1
            </button>
            <button
                onClick={aumentaCidade3}
            >
                Baturité +1 
            </button>
            <button
                onClick={aumentaCidade4}
            >   
                Aracoiaba +1
            </button>   
        </>
    )
}

export default Cidades
