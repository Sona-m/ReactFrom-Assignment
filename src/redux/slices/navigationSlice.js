import { createSlice } from "@reduxjs/toolkit";

 export const navigationSlice = createSlice({
    name : 'navigation',
    initialState : { current : '/info' },
    reducers : {
        navigate(state, action) {
            state.current = action.payload;
        }

    }

});
export const navigationReducer = navigationSlice.reducer;
export const {navigate} = navigationSlice.actions;