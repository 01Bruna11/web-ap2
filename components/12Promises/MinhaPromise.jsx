import { useEffect } from "react"


const minhaPromise = new Promise(

    (resolve, reject) => {
        setTimeout(()=>{
            const x = 10
            if(x%2===0) resolve ("Deu tudo certo!")
            else reject("Deu tudo errado!")
        } 
        ,
        3000
        )

    }

)
//estudar calack e proisse
function meuGet(url) {
    return minhaPromise
}

const MinhaPromise = () => {

    useEffect(
        () => {
            meuGet("http://...")
            .then(
                (response) => console.log(response)
            )
            .catch(
                (error) => console.log(error)
            )
        }
    )

    return (
        <>
        <h1>Testando Promessa!</h1>
        </>
    )
}

export default MinhaPromise


/* o console da undefind p funcoes
function acessarAPI() {
    const res = fetch("https://api.github.com/users/jeffersoncarvalho")
    console.log(res)


} */

/*
fetch("http://github.com/jeffersoncarvalho")
.then(
    (res) => {
        return res.json()

    }
) */