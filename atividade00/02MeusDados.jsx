import React from 'react'

const MeusDados = (props) => {
    return (
        <div>
            <h1>Nome: {props.nome}</h1>
            <h1>Curso: {props.curso}</h1>
            <h1>Universidade: {props.universidade}</h1>
        </div>
    )
}

export default MeusDados



