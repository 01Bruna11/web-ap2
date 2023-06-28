import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import MyMenu from "./MyMenuV1"

import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"
import CadastrarAluno from "./aluno/cadastrar"
import ListarAluno from "./aluno/listar"
import EditarAluno from "./aluno/editar"
import ListarAlunosAprovados from "./aluno/aprovados"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:5,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="listarProfessor" element={<ListarProfessor/>}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor/>}/>
                    <Route path="cadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path="listarALuno" element={<ListarAluno/>}/>
                    <Route path="editarAluno" element={<EditarAluno/>}/>
                   <Route path="listarAlunosAprovados" element={<ListarAlunosAprovados/>}/>
                    
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage