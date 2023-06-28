import React from "react";
import { useEffect } from "react";
import { useState } from "react";
//O componente Questao01X (crie usando função clássica, ou seja, function)

function Questao01X () {
    //A constante alunos é declarada como um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome e notas. Cada aluno tem as notas das avaliações "ap1" e "ap2".
    const alunos = [
        { nome: "Auno fofo", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Aluno chato", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Aluno turista", notas: {ap1: 7.3, ap2: 9.2} }
        ]

//         X deve imprimir, em seu JSX,
// apenas os nomes dos alunos com média superior ou igual a 7.0 (use a forma que achar
// melhor, map ou laço comum).

    const [medias, setMedias] = useState([])
    useEffect(() => {
        const medias = alunos.map(
            (alunos) => (alunos.notas.ap1 + alunos.notas.ap2)/2
        )
        setMedias(medias)
    }
    , [])
    return (
        <div>
          <i><h1>Questão 01</h1></i>  
            <p>{medias.map((media, index) => (media > 7) ? alunos[index].nome : null)}</p>
        </div>
            
    )
    

}



const Questao01Y = () => {
    const [medias, setMedias] = useState([])
    useEffect(() => {
        const medias = alunos.map(
            (alunos) => (alunos.notas.ap1 + alunos.notas.ap2)/2
        )
        setMedias(medias)
    }, [])
    return (
        <div>
            <h1>Questão 01</h1>
            <h1>{medias}</h1>
        </div>
    )
}

export default Questao01X








