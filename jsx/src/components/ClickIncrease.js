function ClickIncrease() {
  const [fontsize, setFontSize] = useState(10);
  
  return(
      	<div>
          <button onClick={() => setFontSize((size) => size + 1)}>
            Increase with click
          </button>
          <p style={{ frontSize }}>Size of font in onClick function: {fontsize}</p>
        </div>
    );
}

export default ClickIncrease;