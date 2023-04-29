import {Button, Container, Grid, Typography} from "@mui/material";
import {exit} from "../store/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {clearNotes} from "../store/NoteSlice";


function Column1() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {username} = useSelector((state) => state.username);
    const {notes} = useSelector((state) => state.notes);

    const quit=async()=>{
        await dispatch(exit())
        await dispatch(clearNotes())
        navigate('/');
    }
    return(

        <Grid element
              // xs={3} md={3}
            width={'25vw'}
        sx={{backgroundColor:'secondary.semitransparent1', borderRight:'1px solid', borderColor:'primary.dark'}}

        >
            <Grid container columns={1} >

                <Grid element xs={12}>
                    <Button variant={"contained"} onClick={quit}
                    sx={{backgroundColor:'button.exit.main', color:'button.exit.text',
                        width:'100%', borderRadius:'0px', height:'13vh', fontSize:'20px',
                    ":hover":{
                        backgroundColor:'button.exit.border',
                    }
                    }}
                    >
                            Выйти
                    </Button>
                </Grid>


                <Grid element
                sx={{marginY:'20px'}}
                >
                    <Typography paragraph
                    sx={{color:'text.text1', marginY:'20px'}}  align={'center'}
                    >
                        Здравствуйте, {username}!
                    </Typography>
                    <Typography paragraph
                    sx={{color:'text.text1', marginY:'20px'}}  align={'center'}
                    >
                        У Вас {notes.length} заметок
                    </Typography>
                    <Typography paragraph
                    sx={{color:'text.text1', borderTop:'solid 1px', borderColor:'primary.dark'}}  align={'center'}
                    >
                        CelestialNotes - сервис облачного хранения Ваших заметок.
                    </Typography>
                    <Typography paragraph
                    sx={{color:'text.text1', borderTop:'solid 1px', borderColor:'primary.dark'}}  align={'center'}
                    >
                        Наши контакты:
                    </Typography>
                </Grid>

            </Grid>
        </Grid>


    )
}

export default Column1;
