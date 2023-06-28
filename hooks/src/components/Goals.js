import React from 'react';

function GoalForm(props) {
    const [formData, setFormData] = useState({ goal:"", by:"" });

    function chageHandler(e){
        setFormData({ ...formData, [e.target.name]: e.target:value});
    }

    function submitHandler(){

    }
}

function ListOfGoals(props) {

}

export default function App() {

}