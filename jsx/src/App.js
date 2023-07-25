import './App.css';
import { RadioGroup, RadioOption } from './Radio';
import { useState, Fragment } from 'react';
import Blog from './components/Blog';

function App() {

  const [selected, setSelected] = useState('');

  return (
    <Fragment>
     <h2>How do you hear about Little Lemon?</h2>
     <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value='social_media'>Social Media</RadioOption>
        <RadioOption value='friends'>Friends</RadioOption>
        <RadioOption value='advertising'>Advertising</RadioOption>
        <RadioOption value='other'>Other</RadioOption> 
     </RadioGroup>
     <button 
        disabled={!selected} onClick={() => {alert("Thank you for submitting your choice")}}>Submit</button>
    <Blog />
    </Fragment>
  );
}

export default App;