import ".App.css";
import { useState } from 'react';

function FeedbackForm(){
const [score, setScore] = useState("10");
const [comment, setComment] = useState("");

const isDisabled = Number(score) < 5 && comment.length <= 10;

const textAreaPlaceholder = isDisabled
    ? "Please, provide a comment explaining why the experience was not good. Minimum length is 10 characters"
    : "Optional feedback";

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({score, comment});
};

    return
}

export default FeedbackForm;