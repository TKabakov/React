import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';
import Heading from "./components/Heading";
import Gallery from "./components/Profile";
import Profile from "./components/Avatar";
import Profile2 from "./components/Profile2";
import Expression from "./components/Expression";
import Expression2 from "./components/Expression2";
import "./App.css"
import PackingList from "./components/PackingList";
import DrinkList from "./components/DrinkList";

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
                str = {str1 + " another " + "string"}
            />
            <h2>PackingList</h2>
            <PackingList />
            <h2>Drink list</h2>
            <DrinkList />

        </div>
    );
};

export default App;
