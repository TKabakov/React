import Weekends from "./components/Weekends";
import Workdays from "./components/Workdays";

function CurrentMessage() {
    const day = new Date().getDay();
        const weekday = (day >= 1 && day <= 5);
        
        let message;
    
        if (weekday) {
            message = <Workdays />
        } else {
            message = <Weekends />
        }
    
        return (
            <div>
                {message}
            </div>
        )
    }

    export default CurrentMessage;