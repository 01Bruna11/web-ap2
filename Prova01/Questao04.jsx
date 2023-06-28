// Contextos são uma forma de compartilhar dados entre componentes, sem a necessidade de passar props manualmente em cada nível da árvore de componentes.
// Para usar um contexto, primeiro criamos um contexto com createContext, e depois usamos o Provider para envolver os componentes que queremos que tenham acesso ao contexto.
// Para acessar o contexto, usamos o useContext, que recebe como parâmetro o contexto que queremos acessar.
//
// Exemplo:
 import React, { createContext, useContext } from "react"
 import ReactDOM from "react-dom"

    const MeuContexto = createContext()
    const Contexto = () => {
        const nome = "Fulano"
        return (
            <MeuContexto.Provider value={nome}>
                <MeuComponente />
            </MeuContexto.Provider>
        )
    }

    const MeuComponente = () => {
        const nome = useContext(MeuContexto)
        return <h1>{nome}</h1>
    }
    ReactDOM.render(
        <Contexto />,
        document.getElementById("root")
    )




