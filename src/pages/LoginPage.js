import {useEffect, useState} from "react";
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
import {addUser, authUser, closeAlert, openAlert} from "../store/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {ErrorStatus, LoadingStatus, SuccessStatus} from "../store/pref";
import AlertDialog from "../components/AlertDialog";

function LoginPage() {
    const [alertMessage, setAlertMessage] = useState({});
    const dispatch = useDispatch();
    const { userStatus} = useSelector((state) => state.userStatus);
    const { userError} = useSelector((state) => state.userError);


    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
            console.log({
            username: data.get('username'),
            password: data.get('password'),
        });
        await dispatch(authUser({
               username:data.get('username'),
               password:data.get('password'),
           }))
    };

    useEffect(() => {
        const alerting = async() => {
            switch (userStatus){
                case ErrorStatus:
                    setAlertMessage({type:ErrorStatus, title:'Ошибка', text:userError})
                    await dispatch(openAlert());
                    break;
                case SuccessStatus:
                    setAlertMessage({type:SuccessStatus, title:'Готово!', text:'Вы успешно вошли.'})
                    await dispatch(openAlert());
                    break;
                case LoadingStatus:
                    setAlertMessage({type:LoadingStatus, title:'Загрузка', text:''})
                    await dispatch(openAlert());
                    break;
                default:
                    setAlertMessage({type:'', title:'', text:''})
                    await dispatch(closeAlert())
                    break;
            }
        }
        alerting()
    },[userStatus])
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
                    id="username"
                    // label="Логин"
                    name="username"
                    autoComplete="username"
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
                <AlertDialog {...alertMessage}/>



            </Box>



        </Box>

        </Container>
    </>
    )

}

export default LoginPage;

