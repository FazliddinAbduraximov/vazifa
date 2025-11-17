import { createSlice } from "@reduxjs/toolkit";

const loadFromLocal = () => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
};

const saveToLocal = (data) => {
    localStorage.setItem("todos", JSON.stringify(data));
};

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        list: loadFromLocal(),
    },

    reducers: {
        createTodo(state, action) {
            const text = action.payload.trim();
            if (!text) return;
            const exists = state.list.some(item => item.text.toLowerCase() === text.toLowerCase());
            if (exists) return;

            state.list.push({
                id: Date.now(),
                text: text,
            });
            saveToLocal(state.list);
        }
        ,

        deleteTodo(state, action) {
            state.list = state.list.filter(item => item.id !== action.payload);
            saveToLocal(state.list);
        },

        updateTodo(state, action) {
            const { id, newText } = action.payload;
            const item = state.list.find(t => t.id === id);
            if (item) item.text = newText;
            saveToLocal(state.list);
        }
    }
});

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
