import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Goal from './components/Goal';
import Garage from './components/Garage';
import Goal2 from './components/Goal2';
import GarageCar from './components/GarageCar';
import GarageCar2 from './components/GarageCar2';
import MyForm from './components/MyForm';
import MyTextarea from './components/MyTextarea';
import MySelect from './components/MySelect';
import MyCar from './components/CarObject';

function App() {
  return (
    <>
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
    < MyCar />
    </>
    )
}

export default App;
