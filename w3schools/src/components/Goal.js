import MadeGoal from "./MadeGoal"
import MissedGoal from "./MissedGoal";

export default function Goal(props) {
    if (props.isGoal) {
        return <MadeGoal />
    }
    return <MissedGoal />
}