import MadeGoal from "./components2/MadeGoal"
import MissedGoal from "./components2/MissedGoal";

export default function Goal() {
    const isGoal="";
    if (isGoal) {
        return <MadeGoal />
    }
    return <MissedGoal />
}