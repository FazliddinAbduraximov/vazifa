import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, updateTodo } from "../features/todo/todoSlice";

export const Todo = () => {

    const todos = useSelector(state => state.todolist.list);
    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const [editId, setEditId] = useState(null);

    return (
        <div style={{ padding: "20px" }}>

            <h2>Todo List</h2>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write todo..."
            />

            {editId ? (
                <button
                    onClick={() => {
                        dispatch(updateTodo({ id: editId, newText: text }));
                        setEditId(null);
                        setText("");
                    }}
                >
                    Save
                </button>
            ) : (
                <button
                    onClick={() => {
                        if (text.trim()) {
                            dispatch(createTodo(text));
                            setText("");
                        }
                    }}
                >
                    Add
                </button>
            )}

            <ul>
                {todos.map(item => (
                    <li key={item.id} style={{ marginTop: "10px" }}>
                        {item.text}

                        <button
                            onClick={() => {
                                setEditId(item.id);
                                setText(item.text);
                            }}
                            style={{ marginLeft: "10px" }}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => dispatch(deleteTodo(item.id))}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
};
