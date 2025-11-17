import { configureStore } from "@reduxjs/toolkit";
import todoRediuser from '../features/todo/todoSlice'

export const store=configureStore({
    reducer:{
        todolist:todoRediuser
    }
})