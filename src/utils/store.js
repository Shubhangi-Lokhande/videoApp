import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import fetchSearchVideoSlice from "./fetchSearchVideoSlice"


const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        searchVideo: fetchSearchVideoSlice
    }
})
export default store;