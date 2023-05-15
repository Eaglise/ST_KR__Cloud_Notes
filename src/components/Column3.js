import Note from "./Note";
import {Button, Container, CssBaseline, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNote, editNote, getUserNotes, setCurrentNote, setNotes} from "../store/NoteSlice";
import {exit, getUser, refreshUser, updateUsername} from "../store/UserSlice";
import DeleteDialog from "./DeleteDialog";




function Column3() {
    const _notes=[
        {title:'Названиеaaaaa aaaaaa aaaaaaa aaaaaaa1', date:'13.01.2023 10:48', content:'_текст_1', user:'daradanci'},
        {title:'Название2', date:'13.01.2023 10:48', content:'_текст_2', user:'daradanci'},
    ]
    const dispatch = useDispatch();
    const {notes} = useSelector((state) => state.notes);
    const {userId} = useSelector((state) => state.userId);
    const {username} = useSelector((state) => state.username);
    const {deletingNote} = useSelector((state) => state.deletingNote);
    const {oldTitle} = useSelector((state) => state.oldTitle);
    useEffect(() => {
        const fetchData = async () => {
            // await dispatch(updateUsername(()=>{
            //     if(localStorage.getItem('username')) {
            //         return localStorage.getItem('username')
            //     } else return ""
            // }))
            // await dispatch(setNotes(()=>{
            //     if(localStorage.getItem('notes')){
            //         return JSON.parse(localStorage.getItem('notes'))
            //     } else return []
            // }))
            await dispatch(refreshUser())
                .then(async ()=>{
                    await dispatch(getUser())
                    .then(async(res)=>{
                        await dispatch(getUserNotes(localStorage.getItem('userId')))
                            // .then(async(res)=>{
                            //     if(notes===[]){
                            //     }
                            // })
                    //    res.payload.data.id
                    })
                    // .catch(async (err)=>{
                    //     if (localStorage.getItem(userId)!==null){
                    //         await dispatch(getUserNotes(localStorage.getItem(userId)))
                    //
                    //     }
                    // })
                })

        }
        fetchData()
    }, [])
    const handleAdd=async (event)=>{
        let updatedCurrentNote={title:`new_note`, content:'', date:'', user:username}

        await dispatch(refreshUser())
            .then(async()=>{
                await dispatch(addNote(updatedCurrentNote))
                    .then(async ()=>{
                        await dispatch(getUserNotes(userId))
                    })
                await dispatch(getUserNotes(userId))
                    .then((res)=>{console.log(res)})
            })

    }
    return(

        <Grid element
              // xs={3}
        sx={{backgroundColor:'secondary.semitransparent1'}}
              width={'25vw'}
        >
            <Grid container columns={1} rowSpacing={0}
>

            <Button variant={"contained"}
                    onClick={async()=>{handleAdd()}}
            sx={{backgroundColor:'button.add.main', color:'button.add.text', border:'1px solid', borderColor:'button.add.text',
                width:'100%', borderRadius:'0px', height:'13vh', fontSize:'20px',
            ":hover":{
                backgroundColor:'button.add.border',
            }
            }}
            >
                    Добавить
            </Button>

        </Grid>
            <CssBaseline />
            <Grid container sx={{overflow: 'auto', maxHeight: "87vh",
                    "&::-webkit-scrollbar": {
                      width: 10
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: 'secondary.semitransparent'
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "secondary.button",
                      borderRadius: 2
                    }

            }}
            >
                {notes.map((item, index) => {
                            return (
                                <Grid element key={index} sx={{width:"100%"}} >
                                    <Note {...item}/>
                                </Grid>
                            )
                        })}
            </Grid>


            {/*<DeleteDialog {...deletingNote}/>*/}

        </Grid>

    )
}

export default Column3;
