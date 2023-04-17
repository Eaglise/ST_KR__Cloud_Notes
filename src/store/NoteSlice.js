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
        return response.data
    }
)

export const addNote = createAsyncThunk(
    'notes/addNote',
    async (note) => {
        const requestOptions = {
            headers: { 'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({
                user: note.username,
                title: note.title,
                content: note.content
            })

        };
        const response = await axios.post(`${IP4}notes`, requestOptions);
        return response.data
    }
)

export const editNote = createAsyncThunk(
    'notes/editNote',
    async (note) => {
        const requestOptions = {
            headers: { 'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({
                user: note.username,
                title: note.title,
                content: note.content,
                old_title: note.old_title,
            })

        };
        const response = await axios.put(`${IP4}notes/edit`, requestOptions);
        return response.data
    }
)

export const deleteNote = createAsyncThunk(
    'notes/deleteNote',
    async (note) => {
        const requestOptions = {
            headers: { 'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({
                user: note.username,
                title: note.title,
            })

        };
        const response = await axios.put(`${IP4}notes/delete`, requestOptions);
        return response.data
    }
)

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        notes:[],
        noteStatus:'',
        currentNote:{},
        oldTitle:'',
    },
    reducers: {
        setCurrentNote: (state, action) => {
            state.currentNote = action.payload;
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
            })
            .addCase(getUserNotes.rejected, (state, action) => {
                state.noteStatus=LoadingStatus
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

export const {setCurrentNote,setOldTitle }=noteSlice.actions;
export default noteSlice.reducer;