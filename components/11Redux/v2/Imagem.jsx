import { useSelector } from "react-redux"

const Imagem = () => {

    const id = useSelector((state)=>state.id.value) 

    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
            style={{width:"300px"}}
            />
        </div>
    )


}

export default Imagem