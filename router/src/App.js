import Navbar from './Navbar';
import './App.css';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import{ Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route to="/" element="{<Home/>}"/>
        <Route to="/" element="{<Home/>}"/>
        <Route to="/" element="{<Home/>}"/>   
      </Routes>
    </div>
    
    </>
  );
}

export default App;
