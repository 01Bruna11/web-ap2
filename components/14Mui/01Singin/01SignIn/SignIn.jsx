import { Box, Button, Container, Link, TextField, Typography } from "@mui/material"

const Signin = () => {
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    marginTop:20
                }}
            >
                <Typography
                    component="h1"
                    variant="h5"
                >
                    Sign In
                </Typography>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    autoFocus

                    label="Endereço de e-mail"
                    id="email"
                    name="email"
                    type="email"

                />
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    autoFocus

                    label="Senha"
                    id="password"
                    name="password"
                    type="password"

                />

            <Button
                fullWidth
                variant="contained"
                //sx={{backgroundColor:"pink"}}
                sx={{
                   my:2
                }} 
            >
                Sing In
            </Button>
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    //backgroundColor:"pink"
                    width: "100%"
                }}

            >
               <Link
                    underline="nome"
                    href="#"
               >
                     Esqueceu a senha?
               </Link>
               <Link
                    underline="nome"
                    href="#"
               >
                    Registe-se
               </Link>
                
            </Box>

            </Box>
        </Container>

    )
}

export default Signin