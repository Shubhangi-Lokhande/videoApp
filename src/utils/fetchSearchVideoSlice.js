import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY} from '../utils/constant';

const initialState = {
    loading: false,
    data:[],
    error:''
}
export const fetchSearchVideoAction = createAsyncThunk('searchVideo/fetch', async (payload)=>{
   const data  = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${payload}&key=${API_KEY}`);
   const json =  await data.json();
   //console.log('first',json);
   return json;
})

const fetchSearchVideoSlice = createSlice({
    name: 'searchVideo',
    initialState,

    reducers: {

        resetState: (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = ''
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchSearchVideoAction.pending, (state)=>{
            state.loading = true;
        }),
        builder.addCase(fetchSearchVideoAction.fulfilled, (state, action)=>{
            state.loading = false,
            state.data = action.payload,
            state.error = ''
        }),
        builder.addCase(fetchSearchVideoAction.rejected, (state, action)=>{
            state.loading = false,
            state.data = [],
            state.error = action.error.message
        })
    }
});

export const { resetState } = fetchSearchVideoSlice.actions;

export default fetchSearchVideoSlice.reducer;