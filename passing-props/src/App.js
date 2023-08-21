import Heading from "./components/Heading";
import Gallery from "./components/Profile";

function App() {
    return (
        <div className="App">
            <Heading firstName="Bob" lastName="Doe"/>
            <Heading firstName="Teo"/>
            <Gallery />
        </div>
    );
};

export default App;
