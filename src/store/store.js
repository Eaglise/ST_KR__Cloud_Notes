import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import noteReducer from './NoteSlice'

export default configureStore({
    reducer:{
        userId:userReducer,
        username:userReducer,
        password:userReducer,
        accessToken:userReducer,
        refreshToken:userReducer,
        userStatus:userReducer,
        userError:userReducer,
        alertOpen:userReducer,
        deleteDialogOpen:userReducer,

        notes:noteReducer,
        noteStatus:noteReducer,
        currentNote:noteReducer,
        deletingNote:noteReducer,
        oldTitle:noteReducer,

    }


})
