import React from 'react';
import { useState } from 'react';

function Feedback() {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("comment");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Number(score) <= 5 &&  (comment.length) <= 10) {
            alert("Plese, provide a comment explaining why the experiance was poor!");
            return;
        }
    
    console.log("Form submitted!");
    setComment("comment");
    setScore("10");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
             <fieldset>
               <h2>Feedback form:</h2>
                    <div className='Field'>
                        <label>Score:{score}</label>
                        <input 
                            type="range" 
                            min="0" 
                            max="10" 
                            value={score} 
                            onChange={e => setScore(e.target.value) }
                        />
                    </div>
                <div className='Filed'>
                    <label>Comment:</label>
                    <textarea 
                        value={comment}
                        onChange={e => setComment(e.target.value)} />
                </div>
                <button type='submit'>Submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Feedback