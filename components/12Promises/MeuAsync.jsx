import { useEffect } from "react"

const minhaPromessa = new Promise (
    (resolve, reject) => {
        const x = true
        if (x) resolve({msg:"Deu certo"})
        else reject({msg:"Deu errado"})
    } 

)

const MeuAsync = () => {

    useEffect(
        () => {
            minhaPromessa
            .then(
                (data) => (console.log(data.msg))
            )
            .catch(
                (data) => (console.log(data.msg))
            )
            getPromessa() 

        }
        ,
        []

    )

    async function getPromessa(){
        try(
        const data = await minhaPromessa
        console.log(data.msg)

        )

    }

    return (
        <>
         <h1>Testando Async</h1>
        </> 

    )
}


export default MeuAsync