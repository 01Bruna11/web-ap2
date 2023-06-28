import { useState, useEffect } from "react"

const Contador = () => {
    //let count = 0
    const [count, setCount] = useState(0) 
    const [ehPar, setEhPar] = useState(true)
    const [teste, setTeste] = useState(100)
    useEffect(() => {
        if(count%2===0) setEhPar(false)
        else setEhPar(true)
    }
    ,
    [teste]
)

    const aumentaCount = () => {
        //count++ 
        setCount(count+1) //usar estados quando a interface é odificada
        //console.log(count)
    }
    return (
        <>
            <h1>Contador: {count} </h1>
            <h1>Eh Par: {ehPar + ""}</h1>
            <button
                onClick={aumentaCount}
            >
                Contar +1
            </button>

        </>

    )

}



export default Contador