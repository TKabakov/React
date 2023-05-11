import MadeGoal from "./MadeGoal"
import MissedGoal from "./MissedGoal";

export default function Goal(props) {
    return (
        <>
        {props.isGoal ? 
        <MadeGoal />:
        <MissedGoal />}
        </>
    );
};