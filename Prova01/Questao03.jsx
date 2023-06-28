import React from "react";
import { useState, useEffect } from "react"
//usar promise - then-catch ou async-await


//inicialmente vou usar a um fetch para obter os dados dos países da região da Europa.
fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
    .then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (data) => {
            console.table(data.map(
                (country) => country.capital[0] + "-" + country.population
        ))
        }
    )
.catch(error => console.log(error))

//Primeiro vou criar dois estados (maior e menor) que serão usados para armazenar a capital dos países com a maior e menor população, respectivamente.
const Questao03 = () => {
    const [maior, setMaior] = useState("")
    const [menor, setMenor] = useState("")
    useEffect(() => { 
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then( //A primeira função then recebe a resposta e a transforma em formato JSON usando o método json(). Essa função retorna outra Promise.
                (response) => {
                    return response.json()
                }
            )
            .then( //O segundo then recebe os dados (no formato JSON) da API. Dentro desse bloco, são realizadas as seguintes ações: São declaradas quatro variáveis: maior, menor, maiorIndex e menorIndex
                (data) => {
                    let maior = 0
                    let menor = 0
                    let maiorIndex = 0
                    let menorIndex = 0
                    data.map(
                        (country, index) => {
                            if (country.population > maior) {
                                maior = country.population
                                maiorIndex = index
                            }
                            if (country.population < menor || menor === 0) {
                                menor = country.population
                                menorIndex = index
                            }
                        }
                    )
                    setMaior(data[maiorIndex].capital[0])
                    setMenor(data[menorIndex].capital[0])
                } //Verifica-se se a população do país é maior que o valor armazenado em maior. Se sim, atualiza-se maior com a nova população e maiorIndex com o índice do país. De forma semelhante para a variavel "menor"
            )
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <i><h1>Questão 03</h1></i>  
            <h2>Maior populaçao: {maior}</h2>
            <h2>Menor populaçao: {menor}</h2>
        </div>
    )
}

export default Questao03