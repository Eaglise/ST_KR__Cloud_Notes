import {Button, Container, Grid, Typography} from "@mui/material";


function Column1() {
    return(

        <Grid element
              xs={3} md={3}
        sx={{backgroundColor:'secondary.semitransparent1', borderRight:'1px solid', borderColor:'primary.dark'}}

        >
            <Grid container columns={1} >

                <Grid element xs={12}>
                    <Button variant={"contained"}
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
                    sx={{color:'text.text1'}}  align={'center'}
                    >
                        Здравствуйте, _InsertUserName_!
                    </Typography>
                </Grid>
                <Grid element
                sx={{marginY:'20px'}}
                >
                    <Typography paragraph
                    sx={{color:'text.text1'}}  align={'center'}
                    >
                        У Вас N заметок.
                    </Typography>
                </Grid>
                <Grid element
                sx={{marginY:'20px'}}
                >
                    <Typography paragraph
                    sx={{color:'text.text1', borderTop:'solid 1px', borderColor:'primary.dark'}}  align={'center'}
                    >
                        CelestialNotes - сервис облачного хранения Ваших заметок.
                        Наши контакты:
{/*https://github.com/Eaglise/ST_KR__Cloud_Notes*/}
                    </Typography>
                </Grid>

            </Grid>
        </Grid>


    )
}

export default Column1;
