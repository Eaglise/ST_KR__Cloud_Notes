import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {IP4, LoadingStatus, SuccessStatus, ErrorStatus} from "./pref";

export const addUser = createAsyncThunk(
    'users/addUser',
    async (newUser) => {

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: newUser.username,
                password: newUser.password,
            })
        };
        console.log(newUser)
        const response = await axios.post(`${IP4}add_user`, requestOptions);
        return response.data
    }
)

export const authUser = createAsyncThunk(
    'users/authUser',
    async (user) => {
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            })
        };
        const response = await axios.post(`${IP4}api/token/obtain`, requestOptions);
        return response.data
    }
)
export const refreshUser = createAsyncThunk(
    'users/refreshUser',
    async () => {
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                refresh: localStorage.getItem('refreshToken'),
            })
        };
        const response = await axios.post(`${IP4}api/token/refresh`, requestOptions);
        return response.data
    }
)

export const getUser = createAsyncThunk(
    'users/getUser',
    async () => {
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        };
        const response = await axios.get(`${IP4}api/user`, requestOptions);
        return response.data
    }
)


export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        userId:0,
        username:"",
        password:"",
        accessToken:"",
        refreshToken:"",
        userStatus:"",
        userError:"",
        alertOpen:false,
    },
    reducers: {
        exit: (state, action) => {
            state.userId=0;
            state.username = "";
            state.password="";
            state.accessToken="";
            localStorage.setItem('accessToken', '')
            state.refreshToken="";
            localStorage.setItem('refreshToken', '')


        },
        updateUsername: (state, action) => {
            state.username = action.payload;
        },
        updatePassword: (state, action) => {
            state.password = action.payload;
        },
        updateAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        updateRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        openAlert: (state, action) => {
            state.alertOpen = true;
        },
        closeAlert: (state, action) => {
            state.alertOpen = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state, action) => {
                state.userStatus=LoadingStatus
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.userStatus = SuccessStatus
            })
            .addCase(addUser.rejected, (state, action) => {
                state.userStatus = ErrorStatus
                state.userError = action.error.message


            })
            .addCase(authUser.pending, (state, action) => {
                state.userStatus=LoadingStatus
            })
            .addCase(authUser.fulfilled, (state, action) => {
                // state.userStatus = SuccessMessage
                state.accessToken=action.payload['access']
                state.refreshToken=action.payload['refresh']
                localStorage.setItem('accessToken', action.payload['access'])
                localStorage.setItem('refreshToken', action.payload['refresh'])
                state.userStatus = SuccessStatus
            })
            .addCase(authUser.rejected, (state, action) => {
                state.userStatus = ErrorStatus
                state.userError = action.error.message
            })
            .addCase(refreshUser.pending, (state, action) => {
                state.userStatus=LoadingStatus
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.accessToken=action.payload['access']
                localStorage.setItem('accessToken', action.payload['access'])
                state.userStatus = SuccessStatus
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.userStatus = ErrorStatus
                state.userError = action.error.message
            })
            .addCase(getUser.pending, (state, action) => {
                state.userStatus=LoadingStatus
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.userId=action.payload['id']
                state.username=action.payload['username']
                state.userStatus = SuccessStatus
            })
            .addCase(getUser.rejected, (state, action) => {
                state.userStatus = ErrorStatus
                state.userError = action.error.message
            })


    }

})

export const {exit, updateUsername, updatePassword, updateAccessToken, updateRefreshToken,
    openAlert, closeAlert,
}=userSlice.actions;
export default userSlice.reducer;