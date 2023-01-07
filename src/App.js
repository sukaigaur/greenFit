import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
