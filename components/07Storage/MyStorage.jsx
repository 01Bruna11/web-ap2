const SaveData = () => {

    const saveData = () => {
        const aluno = {
                        nome:"Engrid",
                        curso: "Ciência",
                        matricula: "508395"                    
                      }

        //sessionStorage.setItem(aluno.matricula, JSON.stringify(aluno))
        localStorage.setItem(aluno.matricula, JSON.stringify(aluno))
    }

    return (
        <div>


            <h1> Salvando Dados...</h1>
            {saveData()}

        </div>
    )

}



export default SaveData

