export default function Clock() {
    let className = "";
    let date = Date.now();
    let hours = date.getHours();
   
    if (hours >= 0 && hours <= 6) {
      className="nigt";
    } else {
      className="day";
    }
    return (
      <h1 className={className} >
        {hours.toLocaleTimeString()}
      </h1>
    );
  }
  