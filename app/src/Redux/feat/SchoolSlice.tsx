import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "react-native-gesture-handler";

const SchoolSlice = createSlice({
    name: 'School',
    initialState:[],
    //initialState:{schools : []},

    reducers:{
        addSchool:(state, action) => {
            state.push(action.payload);
            //state.schools.push(action.payload);
        },
    },
})

export const {addSchool} = SchoolSlice.actions;
const SchoolReducer = SchoolSlice.reducer
export default SchoolReducer;