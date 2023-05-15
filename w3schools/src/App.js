import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Goal from './components/Goal';
import Garage from './components/Garage';
import Goal2 from './components/Goal2';
<<<<<<< HEAD
import Garage2 from './components/Garage2';
const myCars = ["Ford", "BMW", "Audi", "Toyota"];

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Goal isGoal={""}/>
      <Goal2 isGoal={""}/>
      <Garage myCars={ myCars } />
      <Garage2 />
    </div>
=======
import GarageCar from './components/GarageCar';
import GarageCar2 from './components/GarageCar2';
import MyForm from './components/MyForm';
import MyTextarea from './components/MyTextarea';
import MySelect from './components/MySelect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<Home />} /> 
          <Route path='Goal' element= {<Goal />} />
          <Route path='Goal2' element= {<Goal2 />} />
          <Route path='Garage' element= {<Garage />} />
          <Route path='GarageCar' element= {<GarageCar />} />
          <Route path='GarageCar2' element= {<GarageCar2 />} />
          <Route path='MyForm' element= {<MyForm />} />
          <Route path='MyTextarea' element= {<MyTextarea />} />
          <Route path='MySelect' element= {<MySelect />} />
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> 539755ae12e908270964cb6fb4cc27273e98925f
    )
}

export default App;
