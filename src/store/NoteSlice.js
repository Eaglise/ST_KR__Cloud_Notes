import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {IP4, LoadingStatus, SuccessStatus, ErrorStatus} from "./pref";


export const getUserNotes = createAsyncThunk(
    'notes/getUserNotes',
    async (userId) => {
        const requestOptions = {
            headers: { 'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
        };
        const response = await axios.get(`${IP4}notes/${userId}`, requestOptions);
        return response.data.data
    }
)


export const addNote = createAsyncThunk(
    'notes/addNote',
    async (note) => {
        return await fetch(
            `${IP4}notes`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify({
                    user: note.user,
                    title: note.title,
                    content: note.content
                })
            }
        )
            .then(
                (data) => data.json()
            )
    }
)



export const editNote = createAsyncThunk(
    'notes/editNote',
    async (note) => {
        return await fetch(
            `${IP4}notes/edit`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify({
                    user: note.user,
                    title: note.title,
                    content: note.content,
                    old_title: note.old_title,
                    date:note.date,
                })
            }
        )
            .then(
                (data) => data.json()
            )
    }
)


export const deleteNote = createAsyncThunk(
    'notes/deleteNote',
    async (note) => {
        return await fetch(
            `${IP4}notes/delete`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify({
                    user: note.user,
                    title: note.title,
                })
            }
        )
            .then(
                (data) => data.json()
            )
    }
)
export const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        notes:[],
        noteStatus:'',
        currentNote:{title:'', content:'', date:''},
        deletingNote:{title:'', content:'', date:''},
        oldTitle:'',
    },
    reducers: {
        clearNotes: (state, action) => {
            state.notes=[]
            state.noteStatus=''
            state.currentNote={title:'', content:'', date:''}
            state.deletingNote={title:'', content:'', date:''}
            state.oldTitle=''
            localStorage.clear()
        },
        setCurrentNote: (state, action) => {
            state.currentNote = action.payload;
        },
        setDeletingNote: (state, action) => {
            state.deletingNote = action.payload;
        },
        setOldTitle: (state, action) => {
            state.oldTitle = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserNotes.pending, (state, action) => {
                state.noteStatus=LoadingStatus
            })
            .addCase(getUserNotes.fulfilled, (state, action) => {
                state.noteStatus = SuccessStatus
                state.notes=action.payload
                state.currentNote=state.notes[0]
                state.oldTitle=state.notes[0]["title"]
                // let _notes=[]
                // for (let i=0; i<state.notes.length; i++){
                //     // console.log(state.notes[i])
                //     _notes.push((state.notes[i]))
                // }
                localStorage.setItem('notes',JSON.stringify(state.notes))

            })
            .addCase(getUserNotes.rejected, (state, action) => {
                state.noteStatus=LoadingStatus
                state.notes=JSON.parse(localStorage.getItem('notes'))
            })
            .addCase(addNote.pending, (state, action) => {
                state.noteStatus=LoadingStatus
            })
            .addCase(addNote.fulfilled, (state, action) => {
                state.noteStatus = SuccessStatus
            })
            .addCase(addNote.rejected, (state, action) => {
                state.noteStatus=LoadingStatus
            })
            .addCase(editNote.pending, (state, action) => {
                state.noteStatus=LoadingStatus
            })
            .addCase(editNote.fulfilled, (state, action) => {
                state.noteStatus = SuccessStatus
            })
            .addCase(editNote.rejected, (state, action) => {
                state.noteStatus=LoadingStatus
            })
            .addCase(deleteNote.pending, (state, action) => {
                state.noteStatus=LoadingStatus
            })
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.noteStatus = SuccessStatus
            })
            .addCase(deleteNote.rejected, (state, action) => {
                state.noteStatus=LoadingStatus
            })

    }


})

export const {clearNotes,setCurrentNote,setDeletingNote,setOldTitle}=noteSlice.actions;
export default noteSlice.reducer;