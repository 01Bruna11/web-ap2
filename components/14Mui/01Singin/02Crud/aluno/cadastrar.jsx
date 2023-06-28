import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const [nome,setNome] = useState("") //textfield
    const [curso,setCurso] = useState({cc:false,dd:false,ec:false,es:false,si:false,rc:false}) //checkbox //textfield
    const [ira, setIra] = useState("0.0")
    //let {cc, dd, ec, es, si, rc } = curso
    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = {nome,curso,ira}
        axios.post("http://localhost:3001/users",aluno)
        .then((response)=>{
            alert(`aluno ID ${response.data._id} adicionado com sucesso!`)
            navigate("/listarAluno")
        })
        .catch(error=>console.log(error))
        /*console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)*/
    }

    // function handleCheckbox(event){
    //     setCurso({
    //         ...curso,
    //         [event.target.name]: event.target.checked 
    //     })
    // }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar aluno
            </Typography>
            <Box
                sx={{width:"80%"}}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"

                    id="nome"
                    name="nome"
                    onChange={(event)=>setNome(event.target.value)}
                    
                />
               <FormControl sx={{marginTop:2, width:"100%"}} required>
                    <InputLabel id="select-tit-label">Curso</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Curso"
                        value={curso}
                        onChange={(event)=>setCurso(event.target.value)}
                    >
                        <MenuItem value="CC">ciencia da computacao</MenuItem>
                        <MenuItem value="DD">Design digital</MenuItem>
                        <MenuItem value="EC">Engenharia de computacao</MenuItem>
                        <MenuItem value="ED">Engenharia de software</MenuItem>
                        <MenuItem value="SI">Sistemas de Informacao</MenuItem>
                        <MenuItem value="RC">Redes de computadores</MenuItem>
                    </Select>
                </FormControl>

                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    name="ira"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}

                    onChange={(e) =>setIra(parseFloat(e.target.value))}

                />

               
                <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Cadastrar