import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob:null,
        searchJobByText:"",
    },
    reducers:{
        setAllJobs:(state,action) =>{
            state.allJobs = action.payload;
        },
        setsingleJob:(state,action) =>{
            state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action) =>{
            state.allAdminJobs = action.payload;
        },
        searchJobByText:(state,action)=>{
            state.searchJobByText = action.payload;
        }
    }
});

export const {setAllJobs,setsingleJob,setAllAdminJobs,searchJobByText} = jobSlice.actions;
export default jobSlice.reducer;