import { useContext } from "react"
import MinhaCor from "./ClassContext"

const FunctionContextD = () => {
    const cores = useContext(MinhaCor)
    return (
        <h1 style={{ color: value.backgroundColor.bkgD }}>
        Contexto D
        </h1>
    )
}

export default FunctionContextD