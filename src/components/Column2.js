import MainTitle from "./MainTitle";
import {Box, Button, Container, Grid, IconButton, TextField, Typography} from "@mui/material";
import SaveAsSharpIcon from '@mui/icons-material/SaveAsSharp';
const styles = {

  largeIcon: {
    width: 60,
    height: 60,
  },

};
function Column2() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
            console.log({
            title: data.get('title'),
            note: data.get('note'),
        });
    };

    return(
        <Grid element
              xs={6}

        >
        <MainTitle/>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, flexGrow: 1 }} >
            <Grid container columns={1} direction="column" justifyContent="center"  alignItems="center" width={'100%'}
>
                <Grid element>


                </Grid>
                <Grid element sx={{ width:'100%'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row',
                     justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        // border:'2px solid pink',
                    }}>

                        <IconButton sx={{marginLeft:'25%'}}>
                            <SaveAsSharpIcon sx={{
                                color:'secondary.button', fontSize:'200%',
                            ":hover":{
                                color:'button.add.main',
                            }
                            }}/>
                        </IconButton>

                        <TextField
                          id="note_title"
                          label="Название заметки"
                          multiline
                          rows={1}
                          variant="filled"
                          sx={{

                              backgroundColor:'primary.dark', width:'35%',
                              borderRadius:'5px',
                          "& .MuiInputBase-root": {
                                color: 'text.text1'
                            },
                          "& .MuiFormLabel-root": {
                                color: 'text.text1'
                          },
                          "& .MuiFormLabel-root.Mui-focused": {
                                color: 'text.text2'
                          }
                          }}
                        />
                    </Box>

                </Grid>
                <Grid element sx={{width:'100%', marginTop:'20px'}}>

                <TextField
                      id="filled-multiline-static"
                      label="Текст заметки"
                      multiline
                      rows={18}
                      variant="filled"
                      sx={{backgroundColor:'primary.dark', width:'100%',
                      "& .MuiInputBase-root": {
                            color: 'text.text1',
                            // height:'70vh',
                        },
                      "& .MuiFormLabel-root": {
                            color: 'text.text1'
                      },
                      "& .MuiFormLabel-root.Mui-focused": {
                            color: 'text.text2'
                      }
                      }}



                />
                </Grid>
            </Grid>
                </Box>


        </Grid>
    )
}

export default Column2;
