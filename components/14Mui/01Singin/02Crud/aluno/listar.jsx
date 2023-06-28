import { TableContainer, Typography, Table, Paper, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

//iniciamos a funcao Listar alunos
const Listar = () => {

    /*const alunoes = [
        { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST" },
        { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD" },
        { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST" },
        { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT" },
        { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST" }
    ]*/
    const [alunos,setAlunos] = useState([])
    let contador = 1;
    
    //media dos alunos
    const somatorio = alunos.reduce((acumulado, atual)=>{
        return acumulado + atual.data.ira
    },0)
    const media = somatorio/alunos.length
    console.log('media',media);

    useEffect(
        ()=>{
            
            axios.get("http://localhost:3001/users")
            .then(
                (response)=>{
                    //console.log(response)
                    setAlunos(response.data)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    function deleteAlunoById(id) {
        if(window.confirm("Deseja Excluir ? " + id)){
            //alert("aluno " + id + " excluído com sucesso!")
            axios.delete(`http://localhost:3001/users/${id}`)
            .then((response)=>{
                const resultado = alunos.filter(aluno => aluno.id != id)
                setAlunos(resultado)
            })
            .catch(error=>console.log(error))
        }
    }
    //funcao para retornar os alunos listados
    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Alunos
            </Typography>
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno.id} style={{ border: media > aluno.ira ? "2px solid red" : "none",}}>
                                            <StyledTableCell>{contador++}</StyledTableCell>                                            
                                            <StyledTableCell style={{ color: media > aluno.data.ira ? "red" : "black",}}>{aluno.data.nome} </StyledTableCell>
                                            <StyledTableCell>{aluno.data.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.data.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editaraluno/${aluno.id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>deleteAlunoById(aluno.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    
                                    )
                                }
                            )
                        }
                        <StyledTableRow>
                                <StyledTableCell>
                                    <Typography variant="h5" fontWeight="bold">
                                        {media}
                                    </Typography>
                                </StyledTableCell>
                            </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    
        </>

    )
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default Listar