import { configureStore } from "@reduxjs/toolkit";
import emojiReducer from './SearchSlice'


export const store = configureStore ({
    reducer:{
        emoji: emojiReducer,
    }
})
