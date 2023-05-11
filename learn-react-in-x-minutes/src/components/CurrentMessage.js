import ErrorComponent from "./components/ErrorComponent";
import Weekends from "./components/Weekends";
import Workdays from "./components/Workdays";

function CurrentMessage() {
    const day = new Date().getDay();
        const weekday = (day >= 1 && day <= 5);
        const weekend = (day >= 6 && day <= 7);
        let message;
    
        if (weekday) {
            message = <Workdays />
        } else if (weekend){
            message = <Weekends />
        } else {
            message = <ErrorComponent />
    }
    
        return (
            <div>
                {message}
            </div>
        )
    }

    export default CurrentMessage;