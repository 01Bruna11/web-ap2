import { useContext } from "react"
import Neto from "./Neto"
import PokemonContexto from "./PokemonContexto"

const Filho = () => {

    const numero = useContext(PokemonContexto)
    
    return (
        <div>
            <h3>Filho</h3>
            <img
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"}
                alt="Outrass"
                style={{ width: "400px" }}
            />
            <Neto />
        </div>
    )
}

export default Filho
