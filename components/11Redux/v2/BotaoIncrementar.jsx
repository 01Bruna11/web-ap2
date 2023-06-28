import { useDispatch } from "react-redux"
import { incrementar } from "./slice/idSlice"
import { incrementarValor } from "./slice/idSlice"

const BotaoIncrementar = ({incrementar}) => {

    const despachante = useDispatch()

    return (
        <>
        <button onClick={()=>despachante(incrementar())}>
            ID + 1
        </button>
        <button
            onClick={() => {()=>despachante(incrementarValor(10))}}
        >
            ID + 10
        </button>
        </>
    )

}

export default BotaoIncrementar