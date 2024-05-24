import Headers from './components/Headers';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { CartDetails } from './components/CartDetails';
import { Slider } from './components/Slider';
import { filterProducts } from './components/filterProducts';
// import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Home />}/>
    <Route  path='/cart' element={<CartDetails />}/>
    <Route  path='/slider' element={<Slider />}/>
    <Route  path='/filter' element={<filterProducts />}/>
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;