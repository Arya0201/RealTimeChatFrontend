import { Button, Container, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"

const Login = () => {

    const [isLogin,setIsLogin] = useState(true);
    const toggleLogin = ()=> setIsLogin(false);

  return (
    <Container component={"main"} maxWidth={"xs"}  sx={{height:"100vh"}} >
        <Paper
        elevation={3}
        sx={{
            padding:4,
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }}
        >
            {isLogin ? 
            <>
            <Typography variant="h5">
                Login
            </Typography>
            <form style={{width:"100%",marginTop:"1rem"}}>
                <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                />

                <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                />

                <Button variant="contained" color="primary" sx={{marginTop:"1rem"}} type="submit" fullWidth>
                    Login
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>Or</Typography>

                <Button
                 sx={{marginTop:"1rem"}}
                 variant="text"
                 onClick={toggleLogin}
                 fullWidth
                >
                    SignUp Instead
                </Button>
            </form>
            </>
            :
            <span>register</span>}
        </Paper>
    </Container>
  )
}

export default Login