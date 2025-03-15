import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEditClick = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    };

    const handleUpdate = (id) => {
        if (!editText.trim()) return; // Prevent empty updates
        dispatch(updateTodo({ id, text: editText }));
        setEditId(null);
        setEditText("");
    };

    return (
        <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-center mb-4">Todo List</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
                    >
                        {editId === todo.id ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="flex-1 px-2 py-1 border rounded-md"
                            />
                        ) : (
                            <span className="text-gray-700">{todo.text}</span>
                        )}
                        <div>
                            {editId === todo.id ? (
                                <button
                                    onClick={() => handleUpdate(todo.id)}
                                    className="bg-green-500 text-white p-3 py-1 m-1 rounded-md hover:bg-green-600 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>

                                </button>
                            ) : (
                                <button
                                    onClick={() => handleEditClick(todo)}
                                    className="bg-yellow-500 text-white px-3 py-1 m-1 rounded-md hover:bg-yellow-600 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>


                                </button>
                            )}

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 text-white px-3 py-1 m-1 rounded-md hover:bg-red-600 transition"
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>

                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
