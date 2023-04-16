import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Box,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
    Link,
    Button,
    InputLabel, InputAdornment,

} from "@mui/material";
import {Label} from "@mui/icons-material";
import MainTitle from "../components/MainTitle";

function LoginPage() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/notes');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
            console.log({
            login: data.get('login'),
            password: data.get('password'),
        });
    };

    return(
    <>
        <MainTitle/>
        <Container  component="main" maxWidth="xs" sx={{backgroundColor:'secondary.semitransparent',
        borderRadius:'20px'
        }}>

        <Box
            sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height:'440px',
                paddingY:'40px',
            }}
        >
            <Typography component="h1" variant="h5" sx={{color:'white'}}>Авторизация</Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Typography sx={{color:'text.text1',textAlign:'left',
                        justifySelf:'left',
                        display:'block',
                        width:'100%'
                    }}>Логин</Typography>


                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="login"
                    // label="Логин"
                    name="login"
                    autoComplete="login"
                    autoFocus
                    sx={{backgroundColor:'white',
                        // padding:'4px',
                        borderRadius:'20px',
                        ":hover":{
                        },


                    }}

                />
                    <Typography sx={{color:'text.text1',textAlign:'left',
                        justifySelf:'left',
                        display:'block',
                        width:'100%'
                    }}>Пароль</Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    // label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{backgroundColor:'white', borderRadius:'20px',

                    }}

                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"

                    sx={{ mt: 3, mb: 2, height:'50px', color:'secondary.main', backgroundColor:'white',
                        borderRadius:'20px',
                        ":hover":{
                        color:'text.text1'
                        }
                    }}
                >
                    Войти
                </Button>


                    <Link variant="body2" href="/register"
                    sx={{color:'white'}}
                    >
                            {"Нет аккаунта."}
                    </Link>
                </Grid>


            </Box>



        </Box>

        </Container>
    </>
    )

}

export default LoginPage;

