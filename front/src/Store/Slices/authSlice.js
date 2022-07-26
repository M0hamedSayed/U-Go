import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosAuth from './../../Network/Config/axiosAuth';

export const login = createAsyncThunk('auth/login', async (body, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        console.log(body);
        const api = await axiosAuth.post('/login', {
            phoneNumber: body.PhoneNumber,
            country: body.Country,
            password: body.Password,
            mac_address: body?.mac_address
        }, {
            redirect: '/',
            withCredentials: 'true'
        });
        const data = await api.data;
        const redirect = await api.config?.redirect
        return { data, redirect };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const checkAuth = createAsyncThunk('auth/refresh', async (body, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        const api = await axiosAuth.post('/refresh', {
            mac_address: body.mac_address
        }, {
            withCredentials: true
        }
        );
        const data = await api.data;
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const INITIAL_STATE = {
    authChecked: false,
    loggedIn: false,
    currentUser: {},
    token: '',
    loading: false,
    error: '',
    message: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        handleError: (state, action) => {
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        /* login */
        builder.addCase(login.pending, state => {
            state.loading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            const { data } = action.payload;
            state.loading = false;
            state.loggedIn = true;
            state.authChecked = true;
            state.currentUser = data?.user;
            state.token = data.token;
            state.message = data.message;
            state.error = '';
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.loggedIn = false;
            state.authChecked = true;
            state.currentUser = {};
            state.token = '';
            state.message = '';
            state.error = action.payload.error;
        })
        /* refresh token */
        builder.addCase(checkAuth.pending, state => {
            state.loading = true;
        })
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.loggedIn = true;
            state.authChecked = true;
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
            state.message = action.payload.message;
            state.error = '';
        })
        builder.addCase(checkAuth.rejected, (state, action) => {
            state.loading = false;
            state.loggedIn = false;
            state.authChecked = true;
            state.currentUser = {};
            state.token = '';
            state.message = '';
            state.error = action.payload.error;
        })
    }
});

export default authSlice.reducer;
export const { handleError } = authSlice.actions;