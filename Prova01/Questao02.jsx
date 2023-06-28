//renderizar imagem de um pokemon
//iniciar co o pokeon de frente = link https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png
//ao clicar no botao, o pokemon deve virar de costas = link https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png

import React from "react";
import { useState, useEffect } from "react"
//import axios from "axios";


const Questao02 = () => {
   //Inicio com uma variável de estado “turn”, booleana, para ficar alternando entre true e false
    const [turn, setTurn] = useState(true)

    //Agora criando uma variável de estado “pokemon”, para armazenar o link da imagem do pokemon
    const [pokemon, setPokemon] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
    //Aqui criei um useEffect para virar o pokemon ao clicar no botão
    useEffect(() => {
        if (turn) {
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
        } else {
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
        }
    }
    , [turn]) //o turn serve para 
    return (
        <div>
            <i><h1>Questão 02</h1></i>  
            <img src={pokemon} />
            <button onClick={() => setTurn(!turn)}>Virar</button>
        </div>
    )
    
}
    
    export default Questao02;