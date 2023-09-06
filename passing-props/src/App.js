import Heading from "./components/Heading";
import Gallery from "./components/Profile";
import Profile from "./components/Avatar";
import Profile2 from "./components/Profile2";
import Expression from "./components/Expression";
import Expression2 from "./components/Expression2";

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
            <h2>Gallery</h2>
            <Gallery />
            <h2>Profile</h2>
            <Profile />
            <h2>Profile2</h2>
            <Profile2 />
            <h2>Header</h2>
            <Header />
            <Expression
                toggleBoolean={!bool}
            />
            <Expression2
                toggleBoolean={!bool}
                math = {(20 + 30) / 10}
                str = {str1+" another "+"string"}
            />
        </div>
    );
};

export default App;
