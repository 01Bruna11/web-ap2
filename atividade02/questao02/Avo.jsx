import Filho from "./Filho"
import PokemonContexto from "./PokemonContexto"

const Avo = () => {
    const numero = 1
    return (
        <PokemonContexto.Provider value={numero}>
        <div>
            <h1>Avo</h1>
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
                alt="Pikachu"
                style={{width: "400px"}}
            />
            <Filho />
        </div>
        </PokemonContexto.Provider>
    )
}

export default Avo 





