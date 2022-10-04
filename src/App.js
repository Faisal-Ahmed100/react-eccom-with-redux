
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import Error from './pages/Error';
import View from './components/View';
import Cart from './pages/Cart';
import Reginster from './pages/Reginster';
import Login from './pages/Login';
import About from './pages/About';

function App() {
  return (
    <>


 <BrowserRouter>
 <Navbar />
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/product' element={<Products />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/view/:id' element={<View />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/register' element={<Reginster />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<Error />} />

      
    </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
