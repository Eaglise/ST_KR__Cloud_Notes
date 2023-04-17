import MainTitle from "./MainTitle";
import {Box, Button, Container, Grid, IconButton, TextField, Typography} from "@mui/material";
import SaveAsSharpIcon from '@mui/icons-material/SaveAsSharp';
import {useDispatch, useSelector} from "react-redux";
import {addNote, getUserNotes, setCurrentNote} from "../store/NoteSlice";

function Column2() {
    const dispatch = useDispatch();
    const {userId} = useSelector((state) => state.userId);
    const {username} = useSelector((state) => state.username);
    const {currentNote} = useSelector((state) => state.currentNote);
    const {oldTitle} = useSelector((state) => state.oldTitle);

    const handleUpdate=async (event)=>{
        event.preventDefault();
        if(oldTitle===""){
            await dispatch(addNote(currentNote))
                .then(async ()=>{
                    await dispatch(getUserNotes())
                })
        }
    }
    return(
        <Grid element
              // xs={6}
            width={'50vw'}

        >
        <MainTitle/>
                <Box component="form"  noValidate sx={{ mt: 1, flexGrow: 1 }} >
            <Grid container columns={1} direction="column" justifyContent="center"  alignItems="center" width={'100%'}
>
                <Grid element sx={{ width:'100%'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row',
                     justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        // border:'2px solid pink',
                    }}>

                        <IconButton sx={{marginLeft:'25%'}} type={'submit'}>
                            <SaveAsSharpIcon sx={{
                                color:'secondary.button', fontSize:'200%',
                            ":hover":{
                                color:'button.add.main',
                            }
                            }}/>
                        </IconButton>

                        <TextField
                          id="title"
                          label="Название заметки"
                          // multiline
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
                          onChange={async(e)=>{
                              e.preventDefault();
                              let updatedCurrentNote=currentNote
                              updatedCurrentNote['title']=e.target.value
                              await dispatch(setCurrentNote(updatedCurrentNote))
                          }}
                        />
                    </Box>

                </Grid>
                <Grid element sx={{width:'100%', marginTop:'20px'}}>

                <TextField
                      id="content"
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
                      onChange={async(e)=>{
                              e.preventDefault();
                              let updatedCurrentNote=currentNote
                              updatedCurrentNote['content']=e.target.value
                              await dispatch(setCurrentNote(updatedCurrentNote))
                          }}


                />
                </Grid>
            </Grid>
                </Box>


        </Grid>
    )
}

export default Column2;
