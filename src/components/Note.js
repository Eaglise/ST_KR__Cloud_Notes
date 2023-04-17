import {Button, Container, Grid, Box, Paper, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteNote, getUserNotes, setCurrentNote, setOldTitle} from "../store/NoteSlice";


function Note(item) {
    const [color, setColor] = useState('primary.main')
    const dispatch = useDispatch();
    const {userId} = useSelector((state) => state.userId);
    const {username} = useSelector((state) => state.username);
    const {currentNote} = useSelector((state) => state.currentNote);
    const {oldTitle} = useSelector((state) => state.oldTitle);

    const clickHandler=async ()=>{
        await dispatch(setOldTitle(item.title))
        await dispatch(setCurrentNote(item))
    }
    useEffect(() => {
        const updateColor = async () => {
            if(oldTitle!==item.title){
                setColor('primary.main')
            }
            else{
                setColor('primary.dark')
            }
        }
        updateColor()
    }, [oldTitle])
    const deleteHandler=async ()=>{
        await dispatch(deleteNote(item))
            .then(async()=>{
                await dispatch(getUserNotes(userId))
            })
    }
    return(

        <Box sx={{ display: 'flex' }}>
            <Paper elevation={2} onClick={async()=>{clickHandler()}}
                   sx={{width:'80%', borderRadius:'1px', borderBottom:'1px solid',
                borderLeft:'1px solid', borderColor:'secondary.main',
                backgroundColor:color}

            }>
                <Typography sx={{fontSize:'10px', marginTop:'10px', marginLeft:'20px', color:'button.add.main'}}>
                    {item.date}
                </Typography>
                <Typography sx={{marginLeft:'10px', color:'text.text1'}}>
                    {item.title}
                </Typography>
            </Paper>
            <Button variant={"contained"} onClick={async()=>{deleteHandler()}}
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
