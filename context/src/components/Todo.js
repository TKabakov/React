import { useState } from "react";
import { createTodos } from "./utils";
import TodoList from "./TodoList";

const todos = createTodos;

export default function  Todo() {
    const [tab, setTab] = useState('all');
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <button onClick={() => setTab ('all')}>
                All
            </button>
            <button onClick={() => setTab ('active')}>
                Active
            </button>
            <button onClick={() => setTab ('completed')}>
                completed
            </button>          


        </>
    )
}