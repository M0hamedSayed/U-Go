import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    burgerBtnStatus: false,
    sideNavStatus: true
}

const sideNavSlice = createSlice({
    name: 'sideNav',
    initialState: INITIAL_STATE,
    reducers: {
        burgerBtnClicked: (state, action) => {
            state.burgerBtnStatus = action.payload ? true : !state.burgerBtnStatus;
            state.sideNavStatus = action.payload ? state.burgerBtnStatus : !state.burgerBtnStatus;
            // state.sideNavStatus = !state.burgerBtnStatus;
        },
        sideNavOpened: (state) => {
            state.sideNavStatus = !state.sideNavStatus;
        },
        sideNavToggle: (state, action) => {
            state.sideNavStatus = action.payload;
        },
        resetNav: (state) => {
            state.burgerBtnStatus = false;
            state.sideNavStatus = true;
        },
        closeNav: (state) => {
            state.sideNavStatus = false;
            state.burgerBtnStatus = true;
        }
    }
});

export const { burgerBtnClicked, sideNavOpened, resetNav, closeNav, sideNavToggle } = sideNavSlice.actions;
export default sideNavSlice.reducer;
