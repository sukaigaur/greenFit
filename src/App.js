import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './components/Auth/Login';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
