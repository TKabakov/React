import "./App.css";
import { useState } from 'react';

function FeedbackForm(onSubmit){
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

    return(
        <div class="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <div>
                        <label>Score: {score}</label>
                        <input
                            value={score}
                            onChange={(e) => {
                                setScore(e.target.value);
                            }}
                            type="range"
                            min="0"
                            max="10"
                        />
                    </div>
                    <div>
                        <label>Comments:</label>
                        <textarea
                            placeholder={textAreaPlaceholder}
                            name="comment"
                            value={comment}
                            onChange={(e) =>{
                                setComment(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input type='submit'/>
                    </div>     
                </fieldset>
            </form>
        </div>
    )
}

export default FeedbackForm;