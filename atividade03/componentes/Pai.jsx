import React, { useState } from 'react'
import FilhoA from './FilhoA'
import FilhoB from './FilhoB'
import FilhoC from './FilhoC'

const Pai = () => {
    const [maior, setMaior] = useState(0)
    const [menor, setMenor] = useState(0)
    const [media, setMedia] = useState(0)
    const [vetor, setVetor] = useState([1,2,3,4,5])

    const receberMensagemDoFilhoA = (mensagem) => {
        setMaior(mensagem)
    }
    const receberMensagemDoFilhoB = (mensagem) => {
        setMenor(mensagem)
    }
    const receberMensagemDoFilhoC = (mensagem) => {
        setMedia(mensagem)
    }

    return (
        <div>
            <h1>Pai</h1>
            <h3> Maior: {maior} </h3>
            <h3> Menor: {menor} </h3>
            <h3> Media: {media} </h3>
            <FilhoA vetor={vetor} enviarMensagemProPai={receberMensagemDoFilhoA}/>
            <FilhoB vetor={vetor} enviarMensagemProPai={receberMensagemDoFilhoB}/>
            <FilhoC vetor={vetor} enviarMensagemProPai={receberMensagemDoFilhoC}/>
        </div>
    )
}


export default Pai