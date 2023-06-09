function Input(){
  const [firtsName, setFirstName] = useState("");
  
  return(
    <>
      <label>
        Firts name:
    <input
      value={firtsName}
      onChange={e => setFirstName(e.target.value)z/>
      </label>
      {firtsName !== "" && 
        <p> Your name is {firstName}.</p>
      }
    );
}