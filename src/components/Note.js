import {Button, Container, Grid, Box, Paper, Typography} from "@mui/material";


function Note(item) {
    let backgroundColor='primary.main'
    return(

        <Box sx={{ display: 'flex' }}>
            <Paper elevation={2} sx={{width:'80%', borderRadius:'1px', borderBottom:'1px solid',
                borderLeft:'1px solid', borderColor:'secondary.main',
                backgroundColor:backgroundColor}}>
                <Typography sx={{fontSize:'10px', marginTop:'10px', marginLeft:'20px', color:'button.add.main'}}>
                    {item.date}
                </Typography>
                <Typography sx={{marginLeft:'10px', color:'text.text1'}}>
                    {item.title}
                </Typography>
            </Paper>
            <Button variant={"contained"}
                    sx={{backgroundColor:'button.exit.main', color:'button.exit.text',
                        width:'20%', borderRadius:'0px', height:'70px', fontSize:'14px',
                        borderLeft:'1px solid',borderRight:'1px solid',borderBottom:'1px solid ', borderColor:'button.exit.text',

                    ":hover":{
                        backgroundColor:'button.exit.border',
                    }
                    }}
                    >
                            X
            </Button>

        </Box>
    )
}

export default Note;
