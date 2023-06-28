//import React from 'react'
import { Component } from 'react'

// 1. Crie um componente que exiba seu nome, curso e universidade.
/*function MeusDados() {
    return (
        <div>
            <h1>Nome: Engrid Bruna</h1>
            <h1>Curso: Ciência da Coputação</h1>
            <h1>Universidade: UFC</h1>
        </div>
    )
}

export default MeusDados
*/

//com arrow function com return 
/*const MeusDados = () => {
    return (
        <div>
            <h1>Nome: Engrid Bruna</h1>
            <h1>Curso: Ciência da Coputação</h1>
            <h1>Universidade: UFC</h1>
        </div>
    )
}

export default MeusDados
*/

//com arrow function sem return 

/*const MeusDados = () => {
    <div>
        <h1>Nome: Engrid Bruna</h1>
        <h1>Curso: Ciência da Coputação</h1>
        <h1>Universidade: UFC</h1>
    </div>
}

export default MeusDados */

//com classe
class MeusDados extends Component {
    render() {
        return (
            <div>
                <h1>Nome: Engrid Bruna</h1>
                <h1>Curso: Ciência da Coputação</h1>
                <h1>Universidade: UFC</h1>
            </div>
        )
    }
}
export default MeusDados




