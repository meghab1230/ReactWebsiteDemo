import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory.jsx';
import LoginSignUp from './pages/LoginSignUp';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from '../src/components/footer/footer'
import men_banner from './components/Assets/menB.jpeg'
import women_banner from './components/Assets/_.jpeg'
import kid_banner from './components/Assets/kid.jpeg'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>



      

      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
