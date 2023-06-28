import React from 'react';
import { useState } from 'react';

function GoalForm(props) {
    const [formData, setFormData] = useState({ goal:"", by:"" });

    function chageHandler(e){
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    function submitHandler(e){
        e.preventDefault();
        props.onAdd(formData);
        setFormData({ goal:"", by: ""});
    };

    return(
        <>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={submitHandler}>
                <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={chageHandler}/>
                <input type='text' name='by' placeholder='By' value={formData.by} onChange={chageHandler}/>            </form>
        </>
    )
}

function ListOfGoals(props) {
    return (
        <ul>
            {props.allGoals.map((g) => (
                <li key={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            ))}
        </ul>
    );
}

export default function Goals() {

    const [ allGoals, updateAllGoals] = useState([]);

    function addGoal(goal) {
        updateAllGoals ([...allGoals, goal]);
    }

    return (
        <div className='App'>
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />  
        </div>      
    );

}