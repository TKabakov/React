import Heading from "./components/Heading";
import Gallery from "./components/Profile";
import Profile from "./components/Avatar";
import Profile2 from "./components/Profile2";

function Header () {
    return <h1>Hello world</h1>
  }
  
const bool=true;
const str1="just";

function App() {

    return (
        <div className="App">
            <Heading firstName="Bob" lastName="Doe"/>
            <Heading firstName="Teo"/>
            <Gallery />
            <Profile />
            <Profile2 />

        </div>
    );
};

export default App;
