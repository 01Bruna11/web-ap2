import { useContext } from "react"
import PokemonContexto from "./PokemonContexto"

const Neto = () => {
    const numero = useContext(PokemonContexto)

    return (
        <div>
            <h3>Neto</h3>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                alt="Outrass"
                style={{ width: "400px" }}
            />
        </div>
    )
}

export default Neto
