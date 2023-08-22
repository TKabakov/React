import Heading from "./components/Heading";
import Gallery from "./components/Profile";
import Profile from "./components/Avatar";

function App() {
    return (
        <div className="App">
            <Heading firstName="Bob" lastName="Doe"/>
            <Heading firstName="Teo"/>
            <Gallery />
            <Profile />
        </div>
    );
};

export default App;
